import { Component, signal } from '@angular/core';
import { Homepage } from './homepage/homepage';
import { Menu } from './menu/menu';
import { Footer } from './footer/footer';
import { ScrollTopModule } from 'primeng/scrolltop';

@Component({
  selector: 'app-root',
  imports: [Menu, Homepage, Footer, ScrollTopModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gallerydesigns');
}
