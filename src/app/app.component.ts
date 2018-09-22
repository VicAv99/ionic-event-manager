import { Component } from '@angular/core';

import { Plugins } from '@capacitor/core';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
  ) {
    this.initializeApp();
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
