import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-new',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header-new.component.html',
  styleUrl: './header-new.component.scss',
})
export class HeaderNewComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 160;
  }
}
