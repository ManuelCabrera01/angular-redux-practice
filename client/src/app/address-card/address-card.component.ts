import { Component, OnInit, Input } from "@angular/core";
import { User } from "./user.model";
@Component({
  selector: "app-address-card",
  templateUrl: "./address-card.component.html",
  styleUrls: ["./address-card.component.css"]
})
export class AddressCardComponent implements OnInit {
  //setting the input value(hardcode / not efitient)
  // @Input("name")
  // userName: string;
  //

  // this is exporting the user model so it can be use in the  app . component (its parent)
  @Input("user")
  user: User;

  constructor() {}

  ngOnInit() {}
}
