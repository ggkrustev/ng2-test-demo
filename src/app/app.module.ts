import { NgModule } from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    DropDownsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
