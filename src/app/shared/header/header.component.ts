import { Component, inject } from '@angular/core';
import { LanguageService } from '@/app/shared/i18n/language.service';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [RouterLink],
})
export class HeaderComponent {
  lang = inject(LanguageService);
  router = inject(Router);

  activeFragment = '';

  constructor() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.activeFragment =
          this.router.parseUrl(this.router.url).fragment ?? '';
      });
  }

  setLang(code: 'de' | 'en'): void {
    this.lang.setLang(code);
  }
}
