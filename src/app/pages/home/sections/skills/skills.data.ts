import type { IconName } from '@/app/shared/icons/icons.templates';

export type SkillKey =
  | 'html' | 'css' | 'js' | 'ts' | 'angular'
  | 'firebase' | 'git' | 'restApi' | 'scrum' | 'growthMindset';

export interface SkillItem {
  key: SkillKey;
  icon: IconName;
}

export const SKILLS: SkillItem[] = [
  { key: 'html', icon: 'html' },
  { key: 'css', icon: 'css' },
  { key: 'js', icon: 'js' },
  { key: 'ts', icon: 'ts' },
  { key: 'angular', icon: 'angular' },
  { key: 'firebase', icon: 'firebase' },
  { key: 'git', icon: 'git-hub' },     
  { key: 'restApi', icon: 'api' },      
  { key: 'scrum', icon: 'scrum' },
  { key: 'growthMindset', icon: 'grow' }, 
];
