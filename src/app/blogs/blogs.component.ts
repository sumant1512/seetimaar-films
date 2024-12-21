import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  blogs = [
    { id: 1, title: 'Blog 1', description: 'Description 1', img: 'image.webp' },
    { id: 2, title: 'Blog 2', description: 'Description 2', img: 'image.webp' },
    {
      id: 3,
      title: 'Blog 3',
      description:
        'Description 3sdlfslkdflksjdlfjsld sldjflks lkks dlfkjs lsjdf llksdjf lskjdf ',
      img: 'image.webp',
    },
    {
      id: 4,
      title: 'Blog 4',
      description:
        'Description 4 ksdjh skdjfh skjdfh sdkjfhsd fkjs hdf sjkh sdfkjh sdfkjh sdfkjhs dfkjhs dfkjhs dfksh df',
      img: 'image.webp',
    },
    {
      id: 5,
      title: 'Blog 5',
      description:
        'Description dskjfh skdjfh skjdhf skjd hfskjdfh skjd fskjd fskjd fskjd jhf5',
      img: 'image.webp',
    },
    { id: 6, title: 'Blog 6', description: 'Description 6', img: 'image.webp' },
    {
      id: 7,
      title: 'Blog 7',
      description:
        'Descriptionsd jfgjsd fsdfk skjdfh sdhfg skdhgfg sdhgf dhgafd ahsgd jashd jhe fjsdf jsdhgf gjshdg fjshdg fjsgdfj sjdh gfjsd gfjsgd fjg sdjfg 7',
      img: 'image.webp',
    },
    { id: 8, title: 'Blog 8', description: 'Description 8', img: 'image.webp' },
    { id: 9, title: 'Blog 9', description: 'Description 9', img: 'image.webp' },
  ];
}
