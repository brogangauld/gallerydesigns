import { Component } from '@angular/core';
import { Contact } from './sections/contact/contact';
import { Gallery } from './sections/gallery/gallery';
import { Hero } from './sections/hero/hero';
import { Reviews } from './sections/reviews/reviews';
import { Services } from './sections/services/services';
import { RichText } from '../../common/rich-text/rich-text';

@Component({
  selector: 'app-homepage',
  imports: [
    Contact, 
    Gallery, 
    Hero, 
    Reviews, 
    Services, 
    RichText],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
  standalone: true
})
export class Homepage {
}
