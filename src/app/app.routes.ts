import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { FaqPage } from './pages/faq-page/faq-page';

export const routes: Routes = [
  {
    path: '',
    component: Homepage
  },
  {
    path: 'faq',
    component: FaqPage 
  },
  {
    path: '**',
    redirectTo: ''
  }
];