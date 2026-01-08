import { Component, inject } from '@angular/core';
import { LanguageService } from '@/app/shared/i18n/language.service';
import { MarqueeComponent } from '@/app/shared/ui/marquee/marquee.component';
import { IconComponent } from '@/app/shared/icons/icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MarqueeComponent, IconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  lang = inject(LanguageService);
}
