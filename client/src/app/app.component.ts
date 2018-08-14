import { Component } from "@angular/core";
import { User } from "./address-card/user.model";
import { TestService } from "./test.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  user: User;
  inputText: string = "some example";
  constructor(private svc: TestService, private http: HttpClient) {
    svc.printToConsole("printthis nuts");
    this.user = new User();
    (this.user.name = " blah blahmirez"),
      (this.user.tittle = "software Enginireer"),
      (this.user.address = " 1234 main st, city state 12345"),
      (this.user.phone = ["1234 123 1234", "567 56775677"]);
  }
  ngOnInit() {
    let obs = this.http.get("http://api.github.com/users/manuelcabrera01");
    obs.subscribe(response => console.log(response));
  }
}
