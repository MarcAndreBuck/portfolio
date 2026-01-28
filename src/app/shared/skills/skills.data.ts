import type { IconName } from '@/app/shared/icons/icons.templates';

/**
 * Unique identifier for a skill.
 */
export type SkillKey =
  | 'html'
  | 'css'
  | 'js'
  | 'ts'
  | 'angular'
  | 'firebase'
  | 'git'
  | 'restApi'
  | 'scrum'
  | 'growthMindset';

/**
 * Describes a single skill item.
 */
export interface SkillItem {
  /** Skill identifier. */
  key: SkillKey;

  /** Icon name used to render the skill icon. */
  icon: IconName;

  /** Optional display label (can be localized elsewhere). */
  label: string | null;
}

/**
 * List of available skills shown in the skills section.
 */
export const SKILLS: SkillItem[] = [
  { key: 'html', icon: 'html', label: 'HTML' },
  { key: 'css', icon: 'css', label: 'CSS' },
  { key: 'js', icon: 'js', label: 'JavaScript' },
  { key: 'ts', icon: 'ts', label: 'TypeScript' },
  { key: 'angular', icon: 'angular', label: 'Angular' },
  { key: 'firebase', icon: 'firebase', label: 'Firebase' },
  { key: 'git', icon: 'git-hub', label: 'Git' },
  { key: 'restApi', icon: 'api', label: null },
  { key: 'scrum', icon: 'scrum', label: 'Scrum' },
  { key: 'growthMindset', icon: 'grow', label: null },
] as const;
