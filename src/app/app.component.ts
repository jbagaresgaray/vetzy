import { Component } from "@angular/core";

import { Platform, AlertController } from "@ionic/angular";
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
      url: "/recent-checkup",
      icon: "md-time"
    },
    {
      title: "Settings",
      url: "/settings",
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
    private alertController: AlertController,
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

  async logoutApp() {
    const alert = await this.alertController.create({
      header: "Confirm!",
      message: "Confirm to logout the app?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {
            console.log("Confirm Cancel: blah");
          }
        },
        {
          text: "Confirm",
          handler: () => {
            console.log("Confirm Okay");
          }
        }
      ]
    });

    await alert.present();
  }
}
