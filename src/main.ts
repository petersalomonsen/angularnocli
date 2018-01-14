// This is the typescript entry point

import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './app.module.ngfactory';

// We'll start the app.module from here
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);