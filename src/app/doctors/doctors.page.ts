import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-doctors",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./doctors.page.html",
  styleUrls: ["./doctors.page.scss"]
})
export class DoctorsPage implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  viewNotifications() {
    this.router.navigate(["/notifications"]);
  }

  appointDoctor() {
    this.router.navigate(["/booking"]);
  }

  doRefresh(ev: any) {}
}
