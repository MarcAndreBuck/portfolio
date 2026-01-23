import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '@/app/shared/i18n/language.service';
import { MarqueeComponent } from '@/app/shared/ui/marquee/marquee.component';
import { IconComponent } from '@/app/shared/icons/icon.component';
import { ButtonComponent } from '@/app/shared/ui/link-button/link-button.component';
import { IDENTITY, SOCIAL_LINKS, MARQUEE_DURATION } from '@/app/shared/identity.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MarqueeComponent, IconComponent, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  lang = inject(LanguageService);
  identity = IDENTITY;
  socialLinks = SOCIAL_LINKS;
  marqueeDuration = MARQUEE_DURATION;
}
