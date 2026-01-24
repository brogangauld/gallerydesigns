import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-reviews',
  imports: [CardModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})
export class Reviews {

  // truncateText(text: string, maxLength: number): string {
  //   if (text.length <= maxLength) return text;
  //   return text.substring(0, maxLength).trim() + '...';
  // }
}
