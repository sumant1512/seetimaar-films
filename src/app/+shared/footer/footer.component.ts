import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  socialMedia = [
    {
      icon: 'instagram.png',
      path: 'https://www.instagram.com/seetimaarfilms/profilecard/?igsh=dW1neDc2Nm5ybXR4',
    },
    {
      icon: 'facebook.png',
      path: 'https://www.facebook.com/share/19sVra56HL/',
    },
    {
      icon: 'linkdin.png',
      path: 'https://www.linkedin.com/company/106111090/admin/dashboard/',
    },
    { icon: 'whatsapp.png', path: 'https://wa.me/+919993035739' },
  ];
}
