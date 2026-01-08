import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS, IconDefinition, IconName } from './icons.templates';

type SafeIconDefinition = IconDefinition & { safeContent: SafeHtml };

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input({ required: true }) name!: IconName;

  private sanitizer = inject(DomSanitizer);
  private cache = new Map<IconName, SafeIconDefinition>();

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
