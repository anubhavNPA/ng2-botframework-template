import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { XHRBackend } from '@angular/http';


const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
