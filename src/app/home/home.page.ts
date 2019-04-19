import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(public router: Router) {}

  viewDoctors() {
    this.router.navigate(["/doctors"]);
  }

  viewNotifications(){
    this.router.navigate(["/notifications"]);
  }
}
