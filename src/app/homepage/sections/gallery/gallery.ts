import { Component, inject, signal } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { MediaService } from './media-service/media-service';
import { MediaItem } from './media-item';

@Component({
  selector: 'app-gallery',
  imports: [CarouselModule, TagModule, CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
  standalone: true
})
export class Gallery {
  private mediaService = inject(MediaService);

  protected readonly mediaItems = signal<MediaItem[]>(
    this.mediaService.getAllMedia()
  );

  protected readonly responsiveOptions = signal([
    {
      breakpoint: '1400px',  // XXL screens
      numVisible: 5,
      numScroll: 5
    },
    {
      breakpoint: '1200px',  // XL screens
      numVisible: 4,
      numScroll: 4
    },
    {
      breakpoint: '1024px',  // Large screens
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',   // Tablets
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',   // Mobile
      numVisible: 1,
      numScroll: 1
    }
  ]);
}