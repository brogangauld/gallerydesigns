import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, ButtonModule, TagModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  scrollTo(anchorId: string) {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }  
  }
}
