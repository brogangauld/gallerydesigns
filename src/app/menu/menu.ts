import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  standalone: true
})
export class Menu implements AfterViewInit {
  items: MenuItem[] | undefined;
  isOverHero = true;

  ngAfterViewInit() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    let timeout: any;
    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          this.isOverHero = entry.intersectionRatio > 0.3
        }, 40)
      },
      {
        threshold: [0, 0.15, 0.3],
        rootMargin: '-120px 0px 0px 0px'
      }
    );

    observer.observe(hero);
  }

  scrollTo(anchorId: string) {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
