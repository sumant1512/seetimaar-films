import { Component } from '@angular/core';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [VideoComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
