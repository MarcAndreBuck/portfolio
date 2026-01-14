import { Component } from '@angular/core';

import { TestimonialsComponent } from './testimonials/testimonials.component';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [TestimonialsComponent],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss'
})
export class ReferenceComponent {

}
