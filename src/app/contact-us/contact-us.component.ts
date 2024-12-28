import { Component } from '@angular/core';
import { VideoComponent } from '../+shared/video/video.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [VideoComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {}
