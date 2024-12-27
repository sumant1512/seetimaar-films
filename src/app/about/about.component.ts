import { Component } from '@angular/core';
import { AboutCardComponent } from '../+shared/about-card/about-card.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  chitranshAbout = {
    name: 'Chitransh Bhaskar',
    bio: [
      'Writer, director, and the mastermind behind Seetimaar Films—a production house with a vision so grand, even cinema itself gets inspired. Here, we don’t just make movies; we create experiences. We want you to sit back, enjoy every second, and leave with memories (and maybe a few emotional scars). Sometimes, we’ll teach you about life. Other times, you’ll be biting your nails in suspense. And yes, there will be moments when we’ll have you sobbing into your popcorn.',
      'Seetimaar Films isn’t just ambitious; it’s a mission. A mission to give writers the spotlight they deserve, actors the stage to shine, and everyone working behind the camera the standing ovation they’ve always earned. Because let’s face it—without these unsung heroes, even the best script would just be a Word document.',
    ],
    isReadBtnActive: false,
    img: 'chitransh.jpeg',
    imgAlt: 'Chitransh Bhaskar',
    isSwapped: false,
  };

  otherAbout = {
    name: 'Chitransh Bhaskar',
    bio: [
      'Writer, director, and the mastermind behind Seetimaar Films—a production house with a vision so grand, even cinema itself gets inspired. Here, we don’t just make movies; we create experiences. We want you to sit back, enjoy every second, and leave with memories (and maybe a few emotional scars). Sometimes, we’ll teach you about life. Other times, you’ll be biting your nails in suspense. And yes, there will be moments when we’ll have you sobbing into your popcorn.',
      'Seetimaar Films isn’t just ambitious; it’s a mission. A mission to give writers the spotlight they deserve, actors the stage to shine, and everyone working behind the camera the standing ovation they’ve always earned. Because let’s face it—without these unsung heroes, even the best script would just be a Word document.',
    ],
    isReadBtnActive: false,
    img: 'chitransh.jpeg',
    imgAlt: 'Chitransh Bhaskar',
    isSwapped: true,
  };
}
