import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { ContactForm } from "./contact-form/contact-form";
import { RichText } from '../../../common/rich-text/rich-text';
import { Divider } from "primeng/divider";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
    FloatLabelModule,
    MessageModule,
    ContactForm,
    RichText,
    Divider
],
  templateUrl: './contact.html'
})
export class Contact {
  
}
