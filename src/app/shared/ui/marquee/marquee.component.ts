import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-marquee',
  standalone: true,
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss',
})
export class MarqueeComponent implements AfterViewInit, OnDestroy {
  /** Items shown in the marquee loop. */
  @Input() items: readonly string[] = [];

  /** Animation duration in seconds. */
  @Input() duration = 28;

  /** Marquee container used for width calculations. */
  @ViewChild('container', { static: true }) containerRef!: ElementRef<HTMLElement>;

  /** Single group used to measure the content width. */
  @ViewChild('measureGroup', { static: false }) measureGroupRef!: ElementRef<HTMLElement>;

  /** Number of repeated groups required to fill the container. */
  repeats = 2;

  /** Shift distance in pixels for one full loop. */
  shiftPx = 0;

  /** Resize observer to recalculate layout when the container size changes. */
  private ro?: ResizeObserver;

  /**
   * Combined text for screen readers.
   *
   * @returns Marquee items joined into one string.
   */
  get a11yText(): string {
    return this.items.join(' • ');
  }

  /**
   * Starts observing size changes and calculates initial layout.
   */
  ngAfterViewInit(): void {
    this.ro = new ResizeObserver(() => this.updateLayout());
    this.ro.observe(this.containerRef.nativeElement);
    requestAnimationFrame(() => this.updateLayout());
  }

  /**
   * Stops the resize observer to avoid memory leaks.
   */
  ngOnDestroy(): void {
    this.ro?.disconnect();
  }

  /**
   * Calculates how many groups are required to cover the container width.
   */
  private updateLayout(): void {
    const containerWidth = this.containerRef.nativeElement.clientWidth;
    const groupWidth = this.measureGroupRef.nativeElement.scrollWidth;

    if (!groupWidth) return;

    this.shiftPx = groupWidth;
    this.repeats = this.clamp(Math.ceil(containerWidth / groupWidth) + 2, 2, 12);
  }

  /**
   * Clamps a number between min and max.
   *
   * @param value Value to clamp.
   * @param min Minimum allowed value.
   * @param max Maximum allowed value.
   * @returns Clamped value.
   */
  private clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }
}
