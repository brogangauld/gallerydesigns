import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';

export type User = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
    FloatLabelModule,
    MessageModule
  ],
  templateUrl: './contact-form.html'
})
export class ContactForm {
  user: User = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  messageService = inject(MessageService);

  onSubmit(form: any) {
    if (!form.valid) return;

    // Show success toast
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Form submitted successfully',
      life: 3000
    });

    // Reset the form and model
    form.resetForm();
    this.user = { name: '', email: '', phone: '', message: '' };
  }
}
