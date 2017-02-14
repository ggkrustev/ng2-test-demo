import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { load } from "@progress/kendo-angular-intl";

import { AppComponent } from "./app.component";

load(
   // supplemental data
   require(`cldr-data/supplemental/likelySubtags.json`),
   require(`cldr-data/supplemental/weekData.json`),
   require(`cldr-data/supplemental/currencyData.json`),

   // locale data
   require(`cldr-data/main/de/numbers.json`),
   require(`cldr-data/main/de/currencies.json`),
   require(`cldr-data/main/de/ca-gregorian.json`),
   require(`cldr-data/main/de/timeZoneNames.json`)
);

@NgModule({
  imports: [
    BrowserModule,
    DropDownsModule,
    DateInputsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [{ provide: LOCALE_ID, useValue: "de-DE" }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
