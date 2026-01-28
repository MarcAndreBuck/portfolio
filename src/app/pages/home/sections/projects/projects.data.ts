import type { SkillKey } from '@/app/shared/skills/skills.data';

/** Unique identifier for a project. */
export type ProjectKey = 'join' | 'pollo' | 'bubble';

/** Vertical alignment of the project preview image. */
export type PreviewPos = 'top' | 'center' | 'bottom';

/**
 * Describes a single portfolio project.
 */
export type Project = {
  /** Internal project key. */
  key: ProjectKey;

  /** Display title of the project. */
  title: string;

  /** Technologies used in the project. */
  stack: SkillKey[];

  /** Preview image alignment. */
  previewPos: PreviewPos;

  /** Optional GitHub repository URL. */
  repoUrl?: string;

  /** Optional live demo URL. */
  liveUrl?: string;
};

/**
 * List of featured portfolio projects.
 */
export const PROJECTS: readonly Project[] = [
  {
    key: 'join',
    title: 'Join',
    stack: ['angular', 'ts', 'html', 'css', 'firebase'],
    previewPos: 'top',
    repoUrl: 'https://github.com/MarcAndreBuck/join_mpa',
    liveUrl: 'https://marc-buck.dev/projects/join/index.htmll',
  },
  {
    key: 'pollo',
    title: 'El Pollo Loco',
    stack: ['html', 'css', 'js'],
    previewPos: 'center',
    repoUrl: 'https://github.com/MarcAndreBuck/el_pollo_loco-browser-game',
    liveUrl: 'https://marc-buck.dev/projects/el_pollo_loco/index.html',
  },
  {
    key: 'bubble',
    title: 'DA Bubble',
    stack: ['angular', 'firebase', 'ts'],
    previewPos: 'bottom',
    repoUrl: 'https://github.com/MarcAndreBuck/',
  },
] as const;
