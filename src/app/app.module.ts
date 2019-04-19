import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { HomePageModule } from "./home/home.module";
import { ListPageModule } from "./list/list.module";
import { AboutPageModule } from "./about/about.module";
import { RecentCheckupPageModule } from "./recent-checkup/recent-checkup.module";
import { SettingsPageModule } from "./settings/settings.module";
import { DoctorsPageModule } from "./doctors/doctors.module";
import { AppointmentPageModule } from "./appointment/appointment.module";
import { BookingPageModule } from "./booking/booking.module";
import { NotificationsPageModule } from "./notifications/notifications.module";
import { AppNotificationPageModule } from "./app-notification/app-notification.module";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      backButtonText: ""
    }),
    AppRoutingModule,
    HomePageModule,
    ListPageModule,
    AboutPageModule,
    RecentCheckupPageModule,
    SettingsPageModule,
    DoctorsPageModule,
    AppointmentPageModule,
    BookingPageModule,
    NotificationsPageModule,
    AppNotificationPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
