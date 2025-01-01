import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Services } from './services-section.const';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {
  services = Services;
}
