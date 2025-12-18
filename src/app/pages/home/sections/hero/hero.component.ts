import { Component, inject } from '@angular/core';
import { LanguageService } from '@/app/shared/i18n/language.service';
import { MarqueeComponent } from '@/app/shared/ui/marquee/marquee.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MarqueeComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  lang = inject(LanguageService);
}
