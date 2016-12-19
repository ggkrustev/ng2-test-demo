import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule,DropDownsModule, ButtonsModule, DialogModule, HttpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
