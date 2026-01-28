import type { IconName } from './icons/icons.templates';

/**
 * Static identity information used across the portfolio.
 */
export const IDENTITY = {
  /** Full name of the portfolio owner. */
  name: 'Marc-André Buck',

  /** Primary contact email address. */
  email: 'kontakt@marc-buck.de',

  /** Contact phone number. */
  phone: '+49 (0) 1721803982',

  /** Street and house number. */
  street: 'Rosenweg 5',

  /** Postal code and city. */
  postcode: '19230 Hagenow',

  /** Display location string. */
  location: 'Hagenow, Germany',

  /** Professional role or title. */
  role: 'Frontend Developer',

  /** Year the portfolio was created. */
  yearOfConstruct: 2025,
} as const;

/**
 * Describes a social media or external profile link.
 */
export type SocialLink = {
  /** Display label of the platform. */
  label: string;

  /** Icon used for the social link. */
  icon: IconName;

  /** Target URL of the social profile. */
  url: string;

  /** Accessible label for screen readers. */
  ariaLabel: string;
};

/**
 * List of social links shown in the hero and footer sections.
 */
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
] as const;

/**
 * Default duration (in seconds) for marquee animations.
 */
export const MARQUEE_DURATION = 28;
