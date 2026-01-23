import { Component, inject } from '@angular/core';
import { LanguageService } from '../i18n/language.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IDENTITY, SOCIAL_LINKS } from '../identity.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  lang = inject(LanguageService);
  identity = IDENTITY;
  socialLinks = SOCIAL_LINKS;
}
