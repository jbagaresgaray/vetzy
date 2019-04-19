import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-home",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor() {}

  doRefresh(ev: any) {}
}
