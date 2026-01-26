import { Component, Input } from '@angular/core';

export type Stat = {
  figure: string;
  title: string;
  description: string;
};

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
    @Input() stat!: Stat;
}