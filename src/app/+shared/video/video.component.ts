import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() videoSrc!: string;
  @Input() width: string = '600px';
  @Input() height: string = '510px';
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  ngAfterViewInit() {
    this.loadAndPlayVideo();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['videoSrc'] && !changes['videoSrc'].firstChange) {
      this.loadAndPlayVideo();
    }
  }

  loadAndPlayVideo() {
    const videoElement = this.videoPlayer.nativeElement;

    if (this.videoSrc) {
      videoElement.src = this.videoSrc;
      videoElement.load();
      videoElement.muted = true;
      videoElement.autoplay = true;
      videoElement
        .play()
        .then(() => {
          console.log('Video is playing successfully.');
        })
        .catch((error: any) => {
          console.error('Error attempting to play the video:', error);
        });
    } else {
      console.warn('No video source provided.');
    }
  }

  ngOnDestroy() {
    const videoElement = this.videoPlayer.nativeElement;
    if (videoElement) {
      videoElement.pause(); // Stop video playback
      videoElement.currentTime = 0; // Reset video to the beginning
      videoElement.src = ''; // Unset the video source
      videoElement.load(); // Reset the video element
      console.log('Video element has been stopped and cleaned.');
    }
  }
}
