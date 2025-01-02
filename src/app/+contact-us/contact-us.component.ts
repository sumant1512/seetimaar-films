import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  contactDetails = [
    {
      label: 'Call Us',
      value: '+91 9993035739',
      icon: 'phone.png',
      href: 'tel:+91 9993035739',
    },
    {
      label: 'Mail Us',
      value: 'chitransh@seetimaarfilms.com',
      icon: 'email.png',
      href: 'mailto:chitransh@seetimaarfilms.com',
    },
    {
      label: 'Social Media',
      icon: 'social-media.png',
    },
  ];

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
