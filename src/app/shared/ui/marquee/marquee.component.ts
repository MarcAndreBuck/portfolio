import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-marquee',
  standalone: true,
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss',
})
export class MarqueeComponent implements AfterViewInit, OnDestroy {
  @Input() items: readonly string[] = [];
  @Input() duration = 28;

  @ViewChild('container', { static: true }) containerRef!: ElementRef<HTMLElement>;
  @ViewChild('measureGroup', { static: false }) measureGroupRef!: ElementRef<HTMLElement>;

  repeats = 2;
  shiftPx = 0;

  private ro?: ResizeObserver;

  get a11yText(): string {
    return this.items.join(' • ');
  }

  ngAfterViewInit(): void {
    this.ro = new ResizeObserver(() => this.updateLayout());
    this.ro.observe(this.containerRef.nativeElement);
    requestAnimationFrame(() => this.updateLayout());
  }

  ngOnDestroy(): void {
    this.ro?.disconnect();
  }

  private updateLayout(): void {
    const containerWidth = this.containerRef.nativeElement.clientWidth;
    const groupWidth = this.measureGroupRef.nativeElement.scrollWidth;

    if (!groupWidth) return;

    this.shiftPx = groupWidth;
    this.repeats = this.clamp(Math.ceil(containerWidth / groupWidth) + 2, 2, 12);
  }

  private clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }
}
