import { NgModule } from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";

import { AppComponent } from "./app.component";
import { PanelBarItemComponent } from "./panelbar-item.component";

@NgModule({
  imports: [
    BrowserModule,
    DropDownsModule
  ],
  declarations: [
      AppComponent,
      PanelBarItemComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
