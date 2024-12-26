import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss',
})
export class ProjectSectionComponent {
  projects = [
    {
      id: 1,
      name: 'The Story of Guns Valley',
      description:
        'A gripping tale of crime, survival, and redemption, exploring the human stories behind the violence in a lawless valley.',
      img: 'project1.png',
    },
    {
      id: 2,
      name: "Veena's journey",
      description:
        'After a devastating love marriage collapse, a young woman from Urban place, lost in despair, encounters a mysterious saint who offers her hope.',
      img: 'project2.png',
    },
  ];
}
