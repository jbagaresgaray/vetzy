import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-booking",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./booking.page.html",
  styleUrls: ["./booking.page.scss"]
})
export class BookingPage implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  viewNotifications() {
    this.router.navigate(["/notifications"]);
  }
}
