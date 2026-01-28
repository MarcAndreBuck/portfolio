import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS, IconDefinition, IconName } from './icons.templates';

/**
 * Icon definition with sanitized SVG content.
 */
type SafeIconDefinition = IconDefinition & {
  /** Sanitized SVG markup safe for binding via [innerHTML]. */
  safeContent: SafeHtml;
};

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  /** Name of the icon to render. */
  @Input({ required: true }) name!: IconName;

  /** Angular DOM sanitizer for safe SVG rendering. */
  private readonly sanitizer = inject(DomSanitizer);

  /** In-memory cache for sanitized icon definitions. */
  private readonly cache = new Map<IconName, SafeIconDefinition>();

  /**
   * Returns the sanitized icon definition for the current icon name.
   * Results are cached to avoid repeated sanitization.
   *
   * @returns Safe icon definition including sanitized SVG content.
   */
  get definition(): SafeIconDefinition {
    const cached = this.cache.get(this.name);
    if (cached) return cached;

    const def = ICONS[this.name];
    const safeDef: SafeIconDefinition = {
      ...def,
      safeContent: this.sanitizer.bypassSecurityTrustHtml(def.content),
    };

    this.cache.set(this.name, safeDef);
    return safeDef;
  }
}
