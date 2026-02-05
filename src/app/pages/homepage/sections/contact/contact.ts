import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { RichText } from '../../../../common/rich-text/rich-text';
import { AfterViewInit } from '@angular/core';

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
    RichText,
],
  templateUrl: './contact.html'
})
export class Contact implements AfterViewInit {
  widgetLoaded = false;

  ngAfterViewInit() {
    // Check if widget has loaded
    const checkWidget = setInterval(() => {
      const widget = document.querySelector('.elfsight-app-a1bdda9a-2d00-4ab0-947f-b82bb05b395a');
      if (widget && widget.clientHeight > 0) {
        this.widgetLoaded = true;
        clearInterval(checkWidget);
      }
    }, 100);
    
    // Fallback - assume loaded after 3 seconds
    setTimeout(() => {
      this.widgetLoaded = true;
      clearInterval(checkWidget);
    }, 3000);
  }
}