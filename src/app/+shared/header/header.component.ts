import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isScrolled = false;
  isNavOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    console.log(window.innerWidth, window.scrollY);
    this.isScrolled = window.scrollY > (window.innerWidth < 650 ? 126 : 160);
  }

  toggle(): void {
    this.isNavOpen = !this.isNavOpen;
  }
}
