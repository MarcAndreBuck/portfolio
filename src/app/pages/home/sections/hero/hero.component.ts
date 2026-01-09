import { Component, inject } from '@angular/core';
import { LanguageService } from '@/app/shared/i18n/language.service';
import { MarqueeComponent } from '@/app/shared/ui/marquee/marquee.component';
import { IconComponent } from '@/app/shared/icons/icon.component';
import { ButtonComponent } from '@/app/shared/ui/button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MarqueeComponent, IconComponent, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  lang = inject(LanguageService);
}
