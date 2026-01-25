import { Component } from '@angular/core';
import { ServicesAccordion } from "./accordion/services-accordion";
import { RichText } from "../rich-text/rich-text";

@Component({
  selector: 'app-services',
  imports: [ServicesAccordion, RichText],
  templateUrl: './services.html'
})
export class Services {

}
