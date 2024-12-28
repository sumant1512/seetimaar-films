import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGifPlayerComponent } from './video-gif-player.component';

describe('VideoGifPlayerComponent', () => {
  let component: VideoGifPlayerComponent;
  let fixture: ComponentFixture<VideoGifPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoGifPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoGifPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
