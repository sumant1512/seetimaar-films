import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VideoGifPlayerComponent } from '../../+shared/video-gif-player/video-gif-player.component';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [CommonModule, RouterModule, VideoGifPlayerComponent],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss',
})
export class ProjectSectionComponent {
  projects = [
    {
      id: 1,
      name: 'The Story of Guns Valley',
      oneLiner:
        'A gripping tale of crime, survival, and redemption, exploring the human stories behind the violence in a lawless valley.',
      synopsis:
        'In a lawless valley gripped by violence, The Story of Guns Valley delves into the lives of those entangled in a world of crime and chaos. Exploring the societal, psychological, and emotional factors that lead individuals to pick up arms, the series unveils their struggles, motivations, and consequences. Through gripping narratives and multi-dimensional characters, it highlights the harsh realities of anger, betrayal, and survival, while offering glimpses of redemption and hope. This intense and thought-provoking saga sheds light on the choices that define lives and the delicate line between justice and vengeance.',
      video: 'veena.mp4',
    },
    {
      id: 2,
      name: "Veena's journey.",
      oneLiner:
        'After a devastating love marriage collapse, a young woman from Urban place, lost in despair, encounters a mysterious saint who offers her hope: to mend her broken life, she must journey to the highest snowy peak of the Himalayas and capture a ghost. What starts as a desperate quest for reconciliation transforms into a profound spiritual journey, teaching her the true meaning of love, healing, and self-discovery.',
      synopsis:
        'After a devastating love marriage collapse, a young woman from Urban place, lost in despair, encounters a mysterious saint who offers her hope: to mend her broken life, she must journey to the highest snowy peak of the Himalayas and capture a ghost. What starts as a desperate quest for reconciliation transforms into a profound spiritual journey, teaching her the true meaning of love, healing, and self-discovery.',
      video: 'veena.mp4',
    },
  ];
}
