import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '@/app/shared/i18n/language.service';
import { IconComponent } from '@/app/shared/icons/icon.component';
import { SKILLS, SkillItem, SkillKey } from './skills.data';
import { ButtonComponent } from '@/app/shared/ui/button/button.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, IconComponent, ButtonComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  lang = inject(LanguageService);
  skills: SkillItem[] = SKILLS;

  trackByKey(_: number, s: SkillItem): SkillKey {
    return s.key;
  }

  getSkillLabel(key: SkillKey): string {
    return this.lang.dict().skills.labels[key];
  }
}
