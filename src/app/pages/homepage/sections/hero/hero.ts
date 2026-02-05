import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Stats } from "./stats/stats";
import { DividerModule } from 'primeng/divider';
import { CarouselModule } from 'primeng/carousel';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, ButtonModule, TagModule, Stats, DividerModule, CarouselModule, NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  stats = [
    {
      figure: '16',
      title: 'Years Experience',
      description: 'Improving homes with expert craftsmanship for years',
    },
    {
      figure: '2500+',
      title: 'Projects Completed',
      description: 'Over 2500successful projects delivered with quality and care',
    },
    {
      figure: '4',
      title: 'Skilled Tradespeople',
      description: 'Our team ensures top-quality results',
    },
    {
      figure: '100%',
      title: 'Client Satisfaction',
      description: 'All of our clients are satisfied with our work and service',
    },
  ];

  scrollTo(anchorId: string) {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
