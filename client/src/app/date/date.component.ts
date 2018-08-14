import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.css"]
})
export class DateComponent implements OnInit {
  // menber variable
  dateMessage: string;
  //
  constructor() {
    // for template itepolatin example
    setInterval(() => {
      let currentDate = new Date();
      this.dateMessage = `${currentDate.toDateString()}  ${currentDate.toLocaleTimeString()}`;
    }, 1000);
    //
  }

  ngOnInit() {}
  // for template itepolatin example
  addTwoNumbbers(a: number, b: number) {
    return a + b;
  }
  //
}
