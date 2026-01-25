import { Component } from '@angular/core';
import { About } from './sections/about/about';
import { Booking } from './sections/booking/booking';
import { Contact } from './sections/contact/contact';
import { Faq } from './sections/faq/faq';
import { Gallery } from './sections/gallery/gallery';
import { Hero } from './sections/hero/hero';
import { HowItWorks } from './sections/how-it-works/how-it-works';
import { Location } from './sections/location/location';
import { Reviews } from './sections/reviews/reviews';
import { Services } from './sections/services/services';
import { RichText } from "./sections/rich-text/rich-text";

@Component({
  selector: 'app-homepage',
  imports: [
    // About,
    // Booking,
    Contact, 
    // Faq, 
    Gallery, 
    Hero, 
    // HowItWorks, 
    // Location, 
    Reviews, 
    Services, 
    RichText],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
  standalone: true
})
export class Homepage {

}
