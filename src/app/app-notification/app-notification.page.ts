import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-app-notification",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./app-notification.page.html",
  styleUrls: ["./app-notification.page.scss"]
})
export class AppNotificationPage implements OnInit {
  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }
}
