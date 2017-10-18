import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SampleLibModule } from '../src/sample-lib.module';

platformBrowserDynamic().bootstrapModule(SampleLibModule);