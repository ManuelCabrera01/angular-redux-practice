import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-address-card",
  templateUrl: "./address-card.component.html",
  styleUrls: ["./address-card.component.css"]
})
export class AddressCardComponent implements OnInit {
  user: any;
  @Input("name")
  userName: string;

  constructor() {}

  ngOnInit() {
    this.user = {
      name: this.userName,
      tittle: "software developer",
      addres: "1468 main street, city state, 10001",
      phone: ["123 123 1234", "456 456 4567", "890 890 8900"]
    };
  }
}
