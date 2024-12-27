import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  tabs = ['All', 'Corporate', 'Private', 'Commercial', 'TV & Films'];
  selectedTab = this.tabs[0];
  projects = [
    {
      id: 1,
      name: 'The Story of Guns Valley',
      description:
        'A gripping tale of crime, survival, and redemption, exploring the human stories behind the violence in a lawless valley.',
      img: 'p1.png',
      isLatest: true,
    },
    {
      id: 2,
      name: "Veena's journey",
      description:
        'After a devastating love marriage collapse, a young woman from Urban place, lost in despair, encounters a mysterious saint who offers her hope.',
      img: 'p1.png',
    },
    {
      id: 3,
      name: 'The Story of Guns Valley',
      description:
        'A gripping tale of crime, survival, and redemption, exploring the human stories behind the violence in a lawless valley.',
      img: 'p1.png',
    },
    {
      id: 4,
      name: "Veena's journey",
      description:
        'After a devastating love marriage collapse, a young woman from Urban place, lost in despair, encounters a mysterious saint who offers her hope.',
      img: 'p1.png',
    },
    {
      id: 5,
      name: 'The Story of Guns Valley',
      description:
        'A gripping tale of crime, survival, and redemption, exploring the human stories behind the violence in a lawless valley.',
      img: 'p1.png',
    },
    {
      id: 6,
      name: "Veena's journey",
      description:
        'After a devastating love marriage collapse, a young woman from Urban place, lost in despair, encounters a mysterious saint who offers her hope.',
      img: 'p1.png',
    },
  ];

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
