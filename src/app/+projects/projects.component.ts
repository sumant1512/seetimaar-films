import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { VideoComponent } from '../+shared/video/video.component';
import { VideoGifPlayerComponent } from '../+shared/video-gif-player/video-gif-player.component';
import { Projects } from './projects.const';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BlogSectionComponent,
    VideoComponent,
    VideoGifPlayerComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'], // Fixed typo: styleUrl -> styleUrls
})
export class ProjectsComponent {
  projects = Projects;

  selectedProject =
    this.projects.find((project) => project.isLatest) || this.projects[0];

  selectProject(project: any): void {
    this.selectedProject = project;
  }

  getFilteredProjects(): any[] {
    return this.projects.filter((project) => project !== this.selectedProject);
  }
}
