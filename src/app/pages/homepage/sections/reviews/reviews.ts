import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { RichText } from '../../../../common/rich-text/rich-text';
import { AfterViewInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [CardModule, RichText],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})
export class Reviews implements AfterViewInit {
  widgetLoaded = false;

  ngAfterViewInit() {
    // Check if widget has loaded
    const checkWidget = setInterval(() => {
      const widget = document.querySelector('.elfsight-app-fae0c6a0-e493-45da-89e4-096c846db02a');
      if (widget && widget.clientHeight > 0) {
        this.widgetLoaded = true;
        clearInterval(checkWidget);
      }
    }, 100);
    
    // Fallback - assume loaded after 3 seconds
    setTimeout(() => {
      this.widgetLoaded = true;
      clearInterval(checkWidget);
    }, 3000);
  }
}
