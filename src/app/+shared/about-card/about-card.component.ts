import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.scss',
})
export class AboutCardComponent {
  @Input() aboutData: any;
  isSwapped = false;
}
