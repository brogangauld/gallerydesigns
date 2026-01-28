import { Injectable, signal } from '@angular/core';
import { MediaItem } from '../media-item';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private readonly mediaItems = signal<MediaItem[]>([
    {
      id: '1',
      image: '/media/gd0.jpeg',
      title: 'Sliding Wardrobes',
      description: 'Custom-designed wardrobes that maximize your storage space while complementing your rooms aesthetic.',
      category: 'SOLID WOOD'
    },
    {
      id: '2',
      image: '/media/gd1.jpeg',
      title: 'Living Room',
      description: 'Custom-designed wardrobes that maximize your storage space while complementing your rooms aesthetic.',
      category: 'MARBLE'
    },
    {
      id: '3',
      image: '/media/gd2.jpeg',
      title: 'Awkward Spaces',
      description: 'Custom-designed wardrobes that maximize your storage space while complementing your rooms aesthetic.',
      category: 'SOLID WOOD'
    },
    {
      id: '4',
      image: '/media/gd3.jpeg',
      title: 'Home Office',
      description: 'Custom-designed wardrobes that maximize your storage space while complementing your rooms aesthetic.',
      category: 'VENEER MDF'
    },
    {
      id: '5',
      image: '/media/gd4.jpeg',
      title: 'Walk-in Wardrobes',
      description: 'Custom-designed wardrobes that maximize your storage space while complementing your rooms aesthetic.',
      category: 'GLASS'
    },
    {
      id: '6',
      image: '/media/gd0.jpeg',
      title: 'Fitted Wardrobes',
      description: 'Custom-designed wardrobes that maximize your storage space while complementing your rooms aesthetic.',
      category: 'MARBLE'
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