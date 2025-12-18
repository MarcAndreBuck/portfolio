import { Component, inject } from '@angular/core';
import { LanguageService } from '@/app/shared/i18n/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  lang = inject(LanguageService);

  setLang(code: 'de' | 'en'): void {
    this.lang.setLang(code);
  }
}
