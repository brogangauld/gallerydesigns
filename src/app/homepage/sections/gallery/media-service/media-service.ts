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
      title: 'Home Office',
      description: 'Home office storage that fits your style and maximizes productivity.',
    },
    {
      id: '2',
      image: '/media/gd1.jpeg',
      title: 'Living Room',
      description: 'Entertainment units that blend seamlessly and keep clutter out of sight.',
    },
    {
      id: '3',
      image: '/media/gd2.jpeg',
      title: 'Bedrooms',
      description: 'Dreamy bedroom storage solutions designed for ultimate relaxation.',
    },
    {
      id: '4',
      image: '/media/gd4.jpeg',
      title: 'Walk-in Wardrobes',
      description: 'Create the walk-in wardrobe you\'ve always dreamed of.',
    },
    {
      id: '5',
      image: '/media/gd5.jpeg',
      title: 'Fitted Wardrobes',
      description: 'Maximise every inch with fitted wardrobes tailored to your space.',
    },
    {
      id: '6',
      image: '/media/gd6.jpeg',
      title: 'Awkward Spaces',
      description: 'Clever storage solutions for those hard-to-work-with spaces.',
    },
    {
      id: '7',
      image: '/media/gd7.jpeg',
      title: 'Sliding Wardrobes',
      description: 'Space-saving sliding wardrobes that bring style and functionality.',
    }
  ]);

  // Get all media items
  getAllMedia() {
    return this.mediaItems();
  }

  // Get single media item by id
  getMediaById(id: string) {
    return this.mediaItems().find(item => item.id === id);
  }
}