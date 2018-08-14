import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ChildComponent } from "./child/child.component";
import { DateComponent } from "./date/date.component";
import { AddressCardComponent } from "./address-card/address-card.component";
import { ThirdComponent } from "./third/third.component";
import { TestService } from "./test.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    DateComponent,
    AddressCardComponent,
    ThirdComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
