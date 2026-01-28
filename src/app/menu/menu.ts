import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [MenubarModule, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  standalone: true
})
export class Menu {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Our Work',
        icon: 'pi pi-image',
        command: () => { this.scrollTo('gallery') }
      },
      {
        label: 'Our Services',
        icon: 'pi pi-cog',
        command: () => { this.scrollTo('services') }
      },
      // {
      //   label: 'Our Process',
      //   icon: 'pi pi-briefcase',
      //   command: () => { this.scrollTo('how-it-works') }
      // },
      {
        label: 'Materials',
        icon: 'pi pi-book',
        disabled: true,
        // command: () => { this.scrollTo('how-it-works')}
      },
      {
        label: 'Contact Us',
        icon: 'pi pi-envelope',
        command: () => { this.scrollTo('contact') }
      }
    ];
  }
  scrollTo(anchorId: string) {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
