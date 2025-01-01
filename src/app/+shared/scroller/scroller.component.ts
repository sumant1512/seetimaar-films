import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scroller',
  standalone: true,
  imports: [],
  templateUrl: './scroller.component.html',
  styleUrl: './scroller.component.scss',
})
export class ScrollerComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollY = window.scrollY;
    const outerHeight = window.outerHeight;

    const scrollToTopElement =
      this.el.nativeElement.querySelector('#scrollToTop');

    if (scrollY > outerHeight) {
      this.renderer.addClass(scrollToTopElement, 'active');
      setTimeout(() => {
        const theta = (scrollY - (outerHeight + outerHeight / 2)) / 500;
        this.renderer.setStyle(
          scrollToTopElement,
          'transform',
          `rotate(${theta}rad)`
        );
      });
    } else {
      this.renderer.removeClass(scrollToTopElement, 'active');
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
