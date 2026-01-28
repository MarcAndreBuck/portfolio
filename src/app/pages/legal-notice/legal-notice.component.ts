import { LanguageService } from '@/app/shared/i18n/language.service';
import { IDENTITY } from '@/app/shared/identity.data';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {
  lang = inject(LanguageService);
  identity = IDENTITY;

}
