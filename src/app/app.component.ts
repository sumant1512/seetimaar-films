import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderNewComponent } from './header-new/header-new.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollerComponent } from './scroller/scroller.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderNewComponent,
    FooterComponent,
    RouterModule,
    CommonModule,
    ScrollerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
