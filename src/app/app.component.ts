import { Component } from "@angular/core";
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
    </main>
  `
})

export class AppComponent { }
