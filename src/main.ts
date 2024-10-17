import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, gridOutline, addCircleOutline, logOutOutline, informationCircleOutline, addOutline, bookOutline, cartOutline, fastFoodOutline  } from 'ionicons/icons';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

addIcons({
  'home-outline': homeOutline,
  'grid-outline': gridOutline,
  'add-circle-outline': addCircleOutline,
  'log-out-outline': logOutOutline,
  'information-circle-outline': informationCircleOutline,
  'add': addOutline,
  'book-outline': bookOutline,
  'cart-outline': cartOutline,
  'fast-food-outline': fastFoodOutline,
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), 
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()), 
    provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, 
    provideFirestore(() => getFirestore()), 
    provideStorage(() => getStorage()),
  ],
});
