import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { Faqs } from './sections/faqs/faqs';

@Component({
  selector: 'app-faq-page',
  imports: [Hero, Faqs],
  templateUrl: './faq-page.html'
})
export class FaqPage {

}
