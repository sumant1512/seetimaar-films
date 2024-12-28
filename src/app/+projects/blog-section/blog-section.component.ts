import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-section.component.html',
  styleUrl: './blog-section.component.scss',
})
export class BlogSectionComponent {
  blogs = [
    {
      id: 1,
      name: 'Seetimaar Films: Lights, Camera, Seeti!',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: 'b1.png',
    },
    {
      id: 2,
      name: 'Seetimaar Films: Lights, Camera, Seeti!',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: 'b2.png',
    },
    {
      id: 3,
      name: 'Seetimaar Films: Lights, Camera, Seeti!',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: 'b3.png',
    },
  ];
}
