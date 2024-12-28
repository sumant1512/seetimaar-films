import { Component } from '@angular/core';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { ConsultationSectionComponent } from './consultation-section/consultation-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutSectionComponent,
    ProjectSectionComponent,
    ConsultationSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
