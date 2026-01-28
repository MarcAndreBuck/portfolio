import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '@/app/shared/i18n/language.service';
import { IconComponent } from '@/app/shared/icons/icon.component';
import { SKILLS, SkillItem, SkillKey } from '@/app/shared/skills/skills.data';
import { ButtonComponent } from '@/app/shared/ui/link-button/link-button.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, IconComponent, ButtonComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  /** App language service (i18n dictionary access). */
  readonly lang = inject(LanguageService);

  /** List of skill items displayed in the skills section. */
  readonly skills: SkillItem[] = SKILLS;

  /**
   * TrackBy function for stable list rendering.
   *
   * @param _ Index (unused).
   * @param s Current skill item.
   * @returns The skill key.
   */
  trackByKey(_: number, s: SkillItem): SkillKey {
    return s.key;
  }

  /**
   * Returns the localized label for a skill.
   *
   * @param key Skill key.
   * @returns Localized label string.
   */
  getSkillLabel(key: SkillKey): string {
    return this.lang.dict().skills.labels[key];
  }
}
