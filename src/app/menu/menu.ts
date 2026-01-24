import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  imports: [MenubarModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  standalone: true
})
export class Menu {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Our Services',
        icon: 'pi pi-briefcase'
      },
      {
        label: 'Our Process',
        icon: 'pi pi-cog'
      },
      {
        label: 'Gallery',
        icon: 'pi pi-image'
      },
      {
        label: 'Book an Appointment',
        icon: 'pi pi-calendar'
      },
      {
        label: 'Contact Us',
        icon: 'pi pi-envelope'
      }
    ];
  }

}
