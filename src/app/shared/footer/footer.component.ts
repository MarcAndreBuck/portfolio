import { Component, inject } from '@angular/core';
import { LanguageService } from '../i18n/language.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  lang = inject(LanguageService);
  
}
