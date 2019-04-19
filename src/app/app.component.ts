import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  public appPages = [
    {
      title: "Appointment",
      url: "/home",
      icon: "ios-calendar"
    },
    {
      title: "Recent Checkup",
      url: "/list",
      icon: "md-time"
    },
    {
      title: "Settings",
      url: "/list",
      icon: "ios-settings"
    },
    {
      title: "About",
      url: "/about",
      icon: "information-circle-outline"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
