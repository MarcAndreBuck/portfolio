import { AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

export type ButtonVariant = 'simple' | 'marquee';
export type ButtonTarget = '_self' | '_blank' | '_parent' | '_top';

@Component({
  selector: 'app-link-button',
  standalone: true,
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss',
})
export class ButtonComponent implements AfterViewInit {
  @Input() variant: ButtonVariant = 'simple';

  @Input() href: string | null = null;
  @Input() ariaLabel: string | null = null;
  @Input() target: ButtonTarget = '_self';
  @Input() rel: string | null = null;

  @ViewChild('buttonText', { static: true }) buttonText!: ElementRef<HTMLElement>;

  private returnAnimation?: Animation;

  /**
   * Runs after the view is initialized.
   * Ensures safe defaults for external links (target="_blank").
   */
  ngAfterViewInit(): void {
    this.ensureRelForBlankTarget();
  }

  /**
   * Starts the marquee interaction on mouse hover.
   */
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.startMarqueeIfEnabled();
  }

  /**
   * Animates the text back to its start position when the mouse leaves.
   */
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.animateBackIfEnabled();
  }

  /**
   * Starts the marquee interaction when the button receives keyboard focus.
   */
  @HostListener('focusin')
  onFocusIn(): void {
    this.startMarqueeIfEnabled();
  }

  /**
   * Animates the text back to its start position when the button loses focus.
   */
  @HostListener('focusout')
  onFocusOut(): void {
    this.animateBackIfEnabled();
  }

  /**
   * Enables marquee mode if this button variant supports it and motion is allowed.
   * Adds the CSS class that triggers the marquee keyframes.
   */
  private startMarqueeIfEnabled(): void {
    if (this.variant !== 'marquee') return;
    if (this.prefersReducedMotion()) return;

    this.cancelReturnAnimation();

    const el = this.buttonText.nativeElement;
    el.classList.add('is-marquee');
    this.clearInlineStyles();
  }

  /**
   * Stops the marquee and smoothly returns the text to x=0 from its current position.
   * Uses the Web Animations API to avoid snapping on mouse leave / focus out.
   */
  private animateBackIfEnabled(): void {
    if (this.variant !== 'marquee') return;

    const el = this.buttonText.nativeElement;

    if (this.prefersReducedMotion()) {
      el.classList.remove('is-marquee');
      return;
    }

    const currentX = this.getCurrentTranslateX(el);

    el.classList.remove('is-marquee');
    el.style.transform = `translateX(${currentX}px)`;
    el.style.opacity = '1';

    this.cancelReturnAnimation();

    this.returnAnimation = el.animate(
      [{ transform: `translateX(${currentX}px)` }, { transform: 'translateX(0px)' }],
      { duration: 350, easing: 'cubic-bezier(.22, 1, .36, 1)', fill: 'forwards' }
    );

    this.returnAnimation.onfinish = () => this.clearInlineStyles();
  }

  /**
   * Cancels a running return animation to prevent stacked animations and jitter.
   */
  private cancelReturnAnimation(): void {
    this.returnAnimation?.cancel();
    this.returnAnimation = undefined;
  }

  /**
   * Clears inline styles that were applied to freeze or animate the current position.
   * Restores the normal CSS-driven state.
   */
  private clearInlineStyles(): void {
    const el = this.buttonText.nativeElement;
    el.style.transform = '';
    el.style.opacity = '';
  }

  /**
   * Checks the user's system preference for reduced motion.
   * @returns True if reduced motion is enabled.
   */
  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Extracts the current translateX value (in px) from the computed transform matrix.
   * Supports both 2D and 3D transform formats.
   * @param el The element to read the computed transform from.
   * @returns The current translateX value in pixels.
   */
  private getCurrentTranslateX(el: HTMLElement): number {
    const transform = getComputedStyle(el).transform;
    if (!transform || transform === 'none') return 0;

    const matrix2d = transform.match(/^matrix\((.+)\)$/);
    if (matrix2d) return parseFloat(matrix2d[1].split(',')[4]);

    const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) return parseFloat(matrix3d[1].split(',')[12]);

    return 0;
  }

  /**
   * Ensures a secure rel attribute for links opened in a new tab.
   * If target is "_blank" and rel is not set, it defaults to "noopener noreferrer".
   */
  private ensureRelForBlankTarget(): void {
    if (this.target !== '_blank') return;
    if (this.rel && this.rel.trim().length) return;
    this.rel = 'noopener noreferrer';
  }
}
