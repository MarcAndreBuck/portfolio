import { LanguageService } from '@/app/shared/i18n/language.service';
import { IDENTITY } from '@/app/shared/identity.data';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  lang = inject(LanguageService);
  identity = IDENTITY;
}
