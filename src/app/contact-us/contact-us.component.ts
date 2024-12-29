import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule],
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
    { icon: 'facebook.png', path: '' },
    { icon: 'whatsapp.png', path: '' },
    { icon: 'instagram.png', path: '' },
    { icon: 'linkdin.png', path: '' },
  ];
}
