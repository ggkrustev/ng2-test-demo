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
      <label [for]="ddl">DDL:</label>
      <kendo-dropdownlist #ddl [data]="data">
      </kendo-dropdownlist>

      <label [for]="calendar">Calendar:</label>
      <kendo-calendar #calendar></kendo-calendar>
       <form #myForm="ngForm">
           <div class="example-config">
               <p>The form is valid: <strong>{{myForm.valid}}</strong></p>
               <p>The form.begDateModel value is: <strong>{{begDateModel.value | kendoDate: 'M/d/yyyy'}}</strong></p>
               <p>The form.endDateModel value is: <strong>{{endDateModel.value | kendoDate: 'M/d/yyyy'}}</strong></p>

               <p>The form.min value is: <strong>{{min | kendoDate: 'M/d/yyyy'}}</strong></p>
               <p>The form.max value is: <strong>{{max | kendoDate: 'M/d/yyyy'}}</strong></p>

              <div *ngIf="begDateModel.errors">
                {{begDateModel.errors | json}}
              </div>
              <div *ngIf="endDateModel.errors">
                {{endDateModel.errors | json}}
              </div>
           </div>
           <label>
               Select Begin Date:
               <kendo-dateinput
                   name="begDate"
                   [(ngModel)]="begDate"
                   [min]="min"
                   [max]="clamp(endDateModel.value)"
                   required
                   #begDateModel="ngModel"
               ></kendo-dateinput>
           </label>
           <label>
               Select End Date:
               <kendo-dateinput
                   name="endDate"
                   [(ngModel)]="endDate"
                   [min]="clamp(begDateModel.value)"
                   [max]="max"
                   required
                   #endDateModel="ngModel"
               ></kendo-dateinput>
           </label>
       </form>
    </main>
  `
})

export class AppComponent {
    data: any = [ 1, 2, 3, 4 ];

   public min: Date = new Date(2016, 0, 1);
   public max: Date = new Date();
   public begDate: Date = new Date(2017, 0, 1);
   public endDate: Date = new Date();

   public clamp(date: Date): Date {
     const value = date > this.max ? this.max
          : date < this.min ? this.min
          : date;

    return new Date(value);
   }
}
