import { Injectable, signal } from '@angular/core';
import { MediaItem } from '../media-item';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private readonly mediaItems = signal<MediaItem[]>([
    {
      id: '1',
      image: '/media/gd0.jpg',
      title: 'Modern Kitchen Design',
      description: 'Contemporary kitchen with marble countertops',
      category: 'kitchen'
    },
    {
      id: '2',
      image: '/media/gd1.jpg',
      title: 'Luxury Bathroom',
      description: 'Spa-like bathroom renovation',
      category: 'bathroom'
    },
    {
      id: '3',
      image: '/media/gd2.jpg',
      title: 'Living Room Makeover',
      description: 'Open concept living space',
      category: 'living-room'
    },
    {
      id: '4',
      image: '/media/gd3.jpg',
      title: 'Bedroom Retreat',
      description: 'Cozy master bedroom design',
      category: 'bedroom'
    },
    {
      id: '5',
      image: '/media/gd4.jpg',
      title: 'Office Space',
      description: 'Professional home office setup',
      category: 'office'
    },
    {
      id: '6',
      image: '/media/gd5.jpg',
      title: 'Outdoor Patio',
      description: 'Beautiful outdoor living area',
      category: 'outdoor'
    }
  ]);

  // Get all media items
  getAllMedia() {
    return this.mediaItems();
  }

  // Get media by category
  getMediaByCategory(category: string) {
    return this.mediaItems().filter(item => item.category === category);
  }

  // Get single media item by id
  getMediaById(id: string) {
    return this.mediaItems().find(item => item.id === id);
  }

  // Get all unique categories
  getCategories() {
    return [...new Set(this.mediaItems().map(item => item.category))];
  }
}