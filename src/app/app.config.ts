import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const galleryDesignsPreset = definePreset(Aura, {
  semantic: {
    semantic: {
      primary: {
        50: '{noir.50}',
        100: '{noir.100}',
        200: '{noir.200}',
        300: '{noir.300}',
        400: '{noir.400}',
        500: '{noir.500}',
        600: '{noir.600}',
        700: '{noir.700}',
        800: '{noir.800}',
        900: '{noir.900}',
        950: '{noir.950}'
      }
    },
    surface: {
      0: '#ffffff',
      50: '{stone.50}',
      100: '{stone.100}',
      200: '{stone.200}',
      300: '{stone.300}',
      400: '{stone.400}',
      500: '{stone.500}',
      600: '{stone.600}',
      700: '{stone.700}',
      800: '{stone.800}',
      900: '{stone.900}',
      950: '{stone.950}'
    }
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: galleryDesignsPreset
      }
    })
  ]
};
