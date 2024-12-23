import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderNewComponent } from './header-new/header-new.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderNewComponent, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
