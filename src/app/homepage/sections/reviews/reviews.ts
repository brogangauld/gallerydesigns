import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { RichText } from '../../../common/rich-text/rich-text';

@Component({
  selector: 'app-reviews',
  imports: [CardModule, RichText],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})
export class Reviews {

  // truncateText(text: string, maxLength: number): string {
  //   if (text.length <= maxLength) return text;
  //   return text.substring(0, maxLength).trim() + '...';
  // }
}
