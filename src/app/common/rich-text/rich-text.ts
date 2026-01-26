import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-rich-text',
  standalone: true,
  imports: [CommonModule, TagModule],
  templateUrl: './rich-text.html',
  styleUrl: './rich-text.css',
  host: {
    '[style.--p-tag-background]': '"#292524"',
    '[style.--p-tag-border-color]': '"#1c1917"',
    '[style.--p-tag-color]': '"#fafaf9"'
  }
})
export class RichText {
  @Input() tag = '';
  @Input() title = '';
  @Input() content = '';
}
