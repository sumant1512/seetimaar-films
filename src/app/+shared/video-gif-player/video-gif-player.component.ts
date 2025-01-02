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
  @ViewChild('videoPlayer') videoElement!: ElementRef<HTMLVideoElement>;

  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    this.initIntersectionObserver();
    if (this.videoElement) {
      this.observer.observe(this.videoElement.nativeElement);
    }
  }

  private initIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.muted = true;
            video.play();
          } else {
            video.muted = true;
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      { threshold: 0.5 }
    );
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
