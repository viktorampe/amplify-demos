import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import PubSub from '@aws-amplify/pubsub';
import API from '@aws-amplify/api';
import awsconfig from './aws-exports';
import Amplify from 'aws-amplify';



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Add last
API.configure(awsconfig);
PubSub.configure(awsconfig);
Amplify.configure(awsconfig);
