import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { SkillsComponent } from './sections/skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
