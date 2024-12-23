import { Component } from '@angular/core';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ProjectSectionComponent } from './project-section/project-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutSectionComponent, ProjectSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
