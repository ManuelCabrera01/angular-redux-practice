import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TestService {
  printToConsole(arf) {
    console.log(arf);
  }
  constructor() {}
}
