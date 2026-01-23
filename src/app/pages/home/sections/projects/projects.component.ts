import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '@/app/shared/i18n/language.service';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { PROJECTS, type Project, type ProjectKey, type PreviewPos } from './projects.data';
import { SKILLS, type SkillKey } from '@/app/shared/skills/skills.data';
import type { IconName } from '@/app/shared/icons/icons.templates';

type StackItem = { key: SkillKey; icon: IconName; label: string };

type ProjectModalVm = {
  project: Project;
  indexLabel: string;
  description: string;
  previewSrc: string;
  stackItems: StackItem[];
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  /** Language dictionary + current language state. */
  readonly lang = inject(LanguageService);

  /** Static list of projects shown in the projects section. */
  readonly projects: readonly Project[] = PROJECTS;

  /**
   * Element that opened the modal (used to return focus after close for a11y).
   * @private
   */
  private lastTriggerEl: HTMLElement | null = null;

  /**
   * Project key used for the hover preview in the list UI (if enabled).
   * `null` means "no preview currently shown".
   */
  previewProjectKey: ProjectKey | null = null;

  /**
   * Modal view model (single source of truth for modal UI bindings).
   * `null` means modal is closed.
   */
  readonly activeModalVm = signal<ProjectModalVm | null>(null);

  /**
   * Skill icon lookup by skill key (avoids repeated array searches).
   * @private
   */
  private readonly iconByKey = new Map<SkillKey, IconName>(SKILLS.map((s) => [s.key, s.icon]));

  /**
   * Project index lookup by project key (for next/prev navigation + labels).
   * @private
   */
  private readonly projectIndexByKey = new Map<ProjectKey, number>(
    this.projects.map((p, i) => [p.key, i])
  );

  /**
   * Project lookup by project key (for preview config access).
   * @private
   */
  private readonly projectByKey = new Map<ProjectKey, Project>(this.projects.map((p) => [p.key, p]));

  /**
   * TrackBy function to keep DOM nodes stable in `*ngFor` renders.
   * @param _ Index (unused).
   * @param project Project item.
   * @returns Stable project key.
   */
  trackByProjectKey = (_: number, project: Project) => project.key;

  /**
   * Sets the current hover preview project.
   * @param projectKey Project key currently hovered.
   */
  onProjectHover(projectKey: ProjectKey): void {
    this.previewProjectKey = projectKey;
  }

  /** Clears the hover preview. */
  onProjectHoverEnd(): void {
    this.previewProjectKey = null;
  }

  /**
   * Opens the project modal and stores the trigger element for focus restore.
   * @param project Project to show in the modal.
   * @param e Click event (used to capture the trigger element).
   */
  openProject(project: Project, e: MouseEvent): void {
    this.lastTriggerEl = e.currentTarget as HTMLElement;
    this.activeModalVm.set(this.buildModalVm(project));
  }

  /** Closes the modal. */
  close(): void {
    this.activeModalVm.set(null);
  }

  /**
   * Advances the active modal project to the next one (wraps around).
   * Stops event bubbling to prevent overlay click-close.
   * @param event DOM event from the modal control.
   */
  goToNextProject(event: Event): void {
    event.stopPropagation();
    this.shiftActiveProject(1);
  }

  /**
   * Builds the preview image src for a project key.
   * @param projectKey Project key.
   * @returns Asset path for the project preview image.
   */
  getPreviewSrc(projectKey: ProjectKey): string {
    return `assets/projects/${projectKey}.webp`;
  }

  /**
   * Returns the preview position config for the preview image (fallback: 'center').
   * @param projectKey Project key.
   * @returns Preview position string.
   */
  getPreviewPos(projectKey: ProjectKey): PreviewPos {
    return this.projectByKey.get(projectKey)?.previewPos ?? 'center';
  }

  /**
   * Returns translated project text block for the given project.
   * @param projectKey Project key.
   * @returns i18n object for this project (e.g. title/description).
   */
  getProjectText(projectKey: ProjectKey) {
    return this.lang.dict().projects.items[projectKey];
  }

  /**
   * Focus target for returning focus after modal close (a11y).
   * Useful as an input binding for the modal component.
   */
  get returnFocusTo(): HTMLElement | null {
    return this.lastTriggerEl;
  }

  /**
   * Shifts the active modal project by a step (wraps around).
   * @param step Step size (+1 next, -1 previous).
   * @private
   */
  private shiftActiveProject(step: number): void {
    const currentIndex = this.getActiveProjectIndex();
    if (currentIndex === null) return;

    const nextIndex = this.getNextIndex(currentIndex, step);
    this.setActiveProjectByIndex(nextIndex);
  }

  /**
   * Returns the index of the currently active modal project.
   * @returns Index of the active project, or `null` if no project is active / key not found.
   * @private
   */
  private getActiveProjectIndex(): number | null {
    const key = this.activeModalVm()?.project.key;
    if (!key) return null;

    const index = this.getProjectIndexByKey(key);
    return index >= 0 ? index : null;
  }

  /**
   * Returns the next index, wrapping around the project list.
   * Handles negative steps safely by adding the total before applying modulo.
   * @param current Current index.
   * @param step Step (+1 next, -1 previous, etc.).
   * @returns Wrapped next index in range `0..total-1`.
   * @private
   */
  private getNextIndex(current: number, step: number): number {
    const total = this.projects.length;
    return (current + step + total) % total;
  }

  /**
   * Sets the active modal project by index.
   * @param index Project index.
   * @private
   */
  private setActiveProjectByIndex(index: number): void {
    const project = this.projects[index];
    if (!project) return;

    this.activeModalVm.set(this.buildModalVm(project));
  }

  /**
   * Builds the complete modal view model for a project.
   * @param project Project to map into UI-ready data.
   * @returns View model for modal bindings.
   * @private
   */
  private buildModalVm(project: Project): ProjectModalVm {
    const text = this.getProjectText(project.key);

    return {
      project,
      indexLabel: this.getIndexLabel(project.key),
      description: text.description,
      previewSrc: this.getPreviewSrc(project.key),
      stackItems: this.getStackItems(project),
    };
  }

  /**
   * Returns a 2-digit index label (01, 02, ...) for a project key.
   * @param projectKey Project key.
   * @returns Index label or empty string if not found.
   * @private
   */
  private getIndexLabel(projectKey: ProjectKey): string {
    const index = this.getProjectIndexByKey(projectKey);
    return index < 0 ? '' : String(index + 1).padStart(2, '0');
  }

  /**
   * Maps a project's stack keys into icon + label items for the modal UI.
   * @param project Project.
   * @returns Stack items for rendering (icon + label).
   * @private
   */
  private getStackItems(project: Project): StackItem[] {
    const labels = this.lang.dict().skills.labels;

    return project.stack.map((key) => ({
      key,
      icon: this.getIconBySkillKey(key),
      label: labels[key],
    }));
  }

  /**
   * Returns the icon name for a skill key.
   * Throws if the icon mapping is missing (to catch config errors early).
   * @param key Skill key.
   * @returns Icon name for the skill.
   * @throws Error if no icon exists for the given key.
   * @private
   */
  private getIconBySkillKey(key: SkillKey): IconName {
    const icon = this.iconByKey.get(key);
    if (!icon) throw new Error(`Missing icon for skill key: ${key}`);
    return icon;
  }

  /**
   * Returns the project index for a given key.
   * @param projectKey Project key.
   * @returns Index or -1 if not found.
   * @private
   */
  private getProjectIndexByKey(projectKey: ProjectKey): number {
    return this.projectIndexByKey.get(projectKey) ?? -1;
  }
}
