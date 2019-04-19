import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AppNotificationPage } from "../app-notification/app-notification.page";

@Component({
  selector: "app-notifications",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./notifications.page.html",
  styleUrls: ["./notifications.page.scss"]
})
export class NotificationsPage implements OnInit {
  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}

  doRefresh(ev: any) {}

  async viewNotification() {
    const modal = await this.modalCtrl.create({
      component: AppNotificationPage,
      componentProps: {
        prop1: "value",
        prop2: "value2"
      },
      cssClass: "modal-notification"
    });
    return await modal.present();
  }
}
