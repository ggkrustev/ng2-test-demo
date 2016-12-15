import { NgModule } from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { PopupModule } from "@progress/kendo-angular-popup";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    LayoutModule,
    PopupModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
