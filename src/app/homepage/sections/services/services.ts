import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ServiceTab } from './service-tab';

@Component({
  selector: 'app-services',
  imports: [AccordionModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

  tabs: ServiceTab[] = [
    {
      value: 0,
      title: 'Office Storage',
      content: 'Custom-designed wardrobes that maximize your storage space while complementing your rooms aesthetic. Available in a wide range of finishes and configurations',
      icon: 'pi pi-check'
    },
    {
      value: 1,
      title: 'Bedroom Displays',
      content: 'Custom-designed wardrobes that maximize your storage space while complementing your rooms aesthetic. Available in a wide range of finishes and configurations',
      icon: 'pi pi-check' 
    },
    {
      value: 2,
      title: 'Elegant Closets',
      content: 'Custom-designed wardrobes that maximize your storage space while complementing your rooms aesthetic. Available in a wide range of finishes and configurations',
      icon: 'pi pi-check'
    },
    {
      value: 3,
      title: 'Walk-in Wardrobes',
      content: 'Custom-designed wardrobes that maximize your storage space while complementing your rooms aesthetic. Available in a wide range of finishes and configurations',
      icon: 'pi pi-check'
    },
    {
      value: 4,
      title: 'TV Units',
      content: 'Custom-designed wardrobes that maximize your storage space while complementing your rooms aesthetic. Available in a wide range of finishes and configurations',
      icon: 'pi pi-check'
    }
  ]
}
