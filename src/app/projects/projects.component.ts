import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'], // Fixed typo: styleUrl -> styleUrls
})
export class ProjectsComponent {
  tabs = ['All', 'Corporate', 'Private', 'Commercial', 'TV & Films'];
  selectedTab = this.tabs[0];

  projects = [
    {
      id: 1,
      name: 'The Story of Guns Valley 1',
      description:
        'A gripping tale of crime, survival, and redemption, exploring the human stories behind the violence in a lawless valley.',
      img: 'selected-project.png',
      isLatest: true,
    },
    {
      id: 2,
      name: "Veena's journey 2",
      description:
        'After a devastating love marriage collapse, a young woman from Urban place, lost in despair, encounters a mysterious saint who offers her hope.',
      img: 'p1.png',
    },
    {
      id: 3,
      name: 'The Story of Guns Valley 3',
      description:
        'A gripping tale of crime, survival, and redemption, exploring the human stories behind the violence in a lawless valley.',
      img: 'p1.png',
    },
    {
      id: 4,
      name: "Veena's journey 4",
      description:
        'After a devastating love marriage collapse, a young woman from Urban place, lost in despair, encounters a mysterious saint who offers her hope.',
      img: 'p1.png',
    },
    {
      id: 5,
      name: 'The Story of Guns Valley 5',
      description:
        'A gripping tale of crime, survival, and redemption, exploring the human stories behind the violence in a lawless valley.',
      img: 'p1.png',
    },
    {
      id: 6,
      name: "Veena's journey 6",
      description:
        'After a devastating love marriage collapse, a young woman from Urban place, lost in despair, encounters a mysterious saint who offers her hope.',
      img: 'p1.png',
    },
  ];

  selectedProject =
    this.projects.find((project) => project.isLatest) || this.projects[0];

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  selectProject(project: any): void {
    this.selectedProject = project;
  }

  getFilteredProjects(): any[] {
    return this.projects.filter((project) => project !== this.selectedProject);
  }
}
