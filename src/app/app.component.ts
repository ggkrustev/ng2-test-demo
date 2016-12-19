import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
      <button kendoButton *ngIf="!opened" (click)="open()">Open dialog</button>

      <kendo-dialog title="Action required" *ngIf="opened" (close)="close('cancel')">
          <p>Entropy happened.</p>
          <p>Do you accept?</p>
             <kendo-combobox [data]="[1,2,3,4,5,6,7]">
        </kendo-combobox>
          <kendo-dialog-actions>
              <button kendoButton (click)="close('yes')" primary="true">Yes</button>
              <button kendoButton (click)="close('no')">No</button>
          </kendo-dialog-actions>
      </kendo-dialog>
    `
})
export class AppComponent {
    public opened: bool = true;

    public close(status) {
      console.log(`Dialog result: ${status}`);
      this.opened = false;
    }

    public open() {
      this.opened = true;
    }
}
