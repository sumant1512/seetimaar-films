import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withInMemoryScrolling,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';

export function appInitializer(): () => Promise<void> {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        const loader = document.getElementById('global-loader');
        if (loader) {
          loader.classList.add('hidden');
        }
        resolve();
      }, 1000);
    });
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
      })
    ),
  ],
};
