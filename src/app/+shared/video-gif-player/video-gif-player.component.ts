import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-gif-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-gif-player.component.html',
  styleUrl: './video-gif-player.component.scss',
})
export class VideoGifPlayerComponent {
  @Input() videoSrc!: string;
  @Input() width: string = '600px';
  @Input() height!: string;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  playVideo(): void {
    const videoElement = this.videoPlayer.nativeElement;
    videoElement.muted = true;
    videoElement.play();
  }

  pauseVideo(): void {
    const videoElement = this.videoPlayer.nativeElement;
    videoElement.muted = true;
    videoElement.pause();
  }
}
