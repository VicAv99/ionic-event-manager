import { Component } from '@angular/core';

import { Plugins } from '@capacitor/core';
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor() {
    this.initializeApp();
    firebase.initializeApp(environment.firebaseConfig);
  }

  initializeApp() {
    SplashScreen.hide().catch(err => {
      console.error('error', err);
    });

    StatusBar.hide().catch(err => {
      console.error('error', err);
    });
  }
}
