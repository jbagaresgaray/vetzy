import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-about",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./about.page.html",
  styleUrls: ["./about.page.scss"]
})
export class AboutPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
