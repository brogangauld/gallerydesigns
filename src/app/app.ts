import { Component, signal } from '@angular/core';
import { Homepage } from './homepage/homepage';
import { Menu } from './menu/menu';
import { Footer } from './footer/footer';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Menu, Homepage, Footer, ScrollTopModule, ToastModule],
  providers: [MessageService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gallerydesigns');
}
