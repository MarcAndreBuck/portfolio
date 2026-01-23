import type { SkillKey } from '@/app/shared/skills/skills.data';

export type ProjectKey = 'join' | 'pollo' | 'bubble';
export type PreviewPos = 'top' | 'center' | 'bottom';

export type Project = {
    key: ProjectKey;
    title: string;
    stack: SkillKey[];
    previewPos: PreviewPos;
    repoUrl?: string;
    liveUrl?: string;
};

export const PROJECTS: readonly Project[] = [
    {
        key: 'join',
        title: 'Join',
        stack: ['angular', 'ts', 'html', 'css', 'firebase'],
        previewPos: 'top',
        repoUrl: 'https://github.com/MarcAndreBuck/join_mpa',
        liveUrl: 'https://marc-buck.de',
    },
    {
        key: 'pollo',
        title: 'El Pollo Loco',
        stack: ['html', 'css', 'js'],
        previewPos: 'center',
        repoUrl: 'https://github.com/MarcAndreBuck/el_pollo_loco-browser-game',
    },
    {
        key: 'bubble',
        title: 'DA Bubble',
        stack: ['angular', 'firebase', 'ts'],
        previewPos: 'bottom',
    },
];
