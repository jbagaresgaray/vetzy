import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./home/home.module#HomePageModule"
  },
  {
    path: "list",
    loadChildren: "./list/list.module#ListPageModule"
  },
  {
    path: "settings",
    loadChildren: "./settings/settings.module#SettingsPageModule"
  },
  {
    path: "recent-checkup",
    loadChildren:
      "./recent-checkup/recent-checkup.module#RecentCheckupPageModule"
  },
  { path: "about", loadChildren: "./about/about.module#AboutPageModule" },
  {
    path: "doctors",
    loadChildren: "./doctors/doctors.module#DoctorsPageModule"
  },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'appointment', loadChildren: './appointment/appointment.module#AppointmentPageModule' },
  { path: 'booking', loadChildren: './booking/booking.module#BookingPageModule' },
  { path: 'app-notification', loadChildren: './app-notification/app-notification.module#AppNotificationPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
