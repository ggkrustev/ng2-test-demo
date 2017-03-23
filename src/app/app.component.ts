import { Component } from "@angular/core";
import { IntlService } from "@progress/kendo-angular-intl";
// import "../../public/css/styles.css";

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
    </style>
    <main>
      <h1>Hello from Angular 2 App with Webpack</h1>

        '{{value}}' as currency: {{ intl.formatNumber(value, "c") }}
        <br />
        '{{value}}' as percentage: {{ intl.formatNumber(value, "p") }}
    </main>
  `
})

export class AppComponent {
    public value: number = 42;
    constructor(public intl: IntlService) {}
}
