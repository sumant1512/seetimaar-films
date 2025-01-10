import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-consultation-section',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './consultation-section.component.html',
  styleUrl: './consultation-section.component.scss',
})
export class ConsultationSectionComponent {
  serviceID = 'service_5phxcel';
  templateID = 'template_udmqf7g';
  publicKey = 'PN0B7bXnT1dwSZ6hk';
  consultationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    phone: new FormControl('', Validators.required),
    purpose: new FormControl(''),
    message: new FormControl(''),
  });

  sendEmail() {
    console.log('called send email', this.consultationForm.value);
    emailjs
      .send(
        this.serviceID,
        this.templateID,
        this.consultationForm.value,
        this.publicKey
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('Email sent successfully:', result.text);
        },
        (error: any) => {
          console.error('Error sending email:', error.text);
        }
      );
  }
}
