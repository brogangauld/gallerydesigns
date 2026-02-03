import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Faq } from './pages/faq/faq';

export const routes: Routes = [
  {
    path: '',
    component: Homepage
  },
  {
    path: 'faq',
    component: Faq 
  },
  {
    path: '**',
    redirectTo: ''
  }
];