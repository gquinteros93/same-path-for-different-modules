import { enableProdMode, Injector } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';
export let appInjector: Injector;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then((componentRef) => {
      appInjector = componentRef.injector;
  })
  .catch(err => console.error(err));
