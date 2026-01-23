import type { IconName } from './icons/icons.templates';

export const IDENTITY = {
  name: 'Marc-André Buck',
  email: 'kontakt@marc-buck.de',
  street: 'Rosenweg 5',
  postcode: '19230 Hagenow',
  location: 'Hagenow, Germany',
  role: 'Frontend Developer',
  yearOfConstruct: 2025,
};

export type SocialLink = {
  label: string;
  icon: IconName;
  url: string;
  ariaLabel: string;
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    label: 'GitHub',
    icon: 'git',
    url: 'https://github.com/MarcAndreBuck',
    ariaLabel: 'Open GitHub profile in new tab',
  },
  {
    label: 'LinkedIn',
    icon: 'linkedIn',
    url: 'https://de.linkedin.com/in/marc-andr%C3%A9-buck-b921431aa',
    ariaLabel: 'Open LinkedIn profile in new tab',
  },
];

export const MARQUEE_DURATION = 28;
