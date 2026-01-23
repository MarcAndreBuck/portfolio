import type { IconName } from '@/app/shared/icons/icons.templates';

export type SkillKey =
  | 'html' | 'css' | 'js' | 'ts' | 'angular'
  | 'firebase' | 'git' | 'restApi' | 'scrum' | 'growthMindset';

export interface SkillItem {
  key: SkillKey;
  icon: IconName;
  label: string | null;
}

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
];