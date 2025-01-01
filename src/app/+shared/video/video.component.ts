import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent implements AfterViewInit {
  @Input() videoSrc!: string;
  @Input() width: string = '600px';
  @Input() height: string = '510px';
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  ngAfterViewInit() {
    this.autoPlayVideo();
  }

  autoPlayVideo() {
    const videoElement = this.videoPlayer.nativeElement;

    videoElement.muted = true;
    videoElement.autoplay = true;
    // videoElement.loop = true;

    videoElement
      .play()
      .then(() => {
        console.log(`${this.videoSrc} video is playing successfully.`);
      })
      .catch((error: any) => {
        console.error('Error attempting to play the video:', error);
      });
  }
}
