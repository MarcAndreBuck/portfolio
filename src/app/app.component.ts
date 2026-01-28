import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  /** Application title (used internally). */
  title = 'portfolio';

  /**
   * Updates CSS custom properties with the current mouse position.
   * Used for subtle global hover / light effects.
   * Disabled on devices without hover capability (e.g. touch devices).
   *
   * @param e Mouse move event.
   */
  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (window.matchMedia('(hover: none)').matches) return;

    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
  }
}
