import { IconComponent } from '@/app/shared/icons/icon.component';
import { LanguageService } from '@/app/shared/i18n/language.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  lang = inject(LanguageService);
}
