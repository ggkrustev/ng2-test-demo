import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <style>
        main {
          padding: 1em;
          font-family: Arial, Helvetica, sans-serif;
          text-align: center;
          margin-top: 50px;
          display: block;
        }

        kendo-popup {
            z-index: 100 !important;
        }
    </style>
    <main>
        <h1>Hello from Angular 2 App with Webpack</h1>
        <panelbar-item [zIndex]="1" [title]="'Kendo dropdownlist not working inside here'" [open]="true">
            <kendo-dropdownlist [data]="data">
            </kendo-dropdownlist>
        </panelbar-item>

        <panelbar-item [title]="'Other divs, no kendo inside '" [open]="true">
            <div>test test test</div>
            <div>test test test</div>
            <div>test test test</div>
            <div>test test test</div>
        </panelbar-item>
    </main>
  `
})

export class AppComponent {
    data: any = [ 1, 2, 3, 4 ];
}
