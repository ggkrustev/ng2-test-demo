import { Component } from "@angular/core";
import { PanelBarItemModel } from "@progress/kendo-angular-layout";

const ITEMS: any[] = [
    {
        id: "1",
        title: "My Web Site",
        icon: "folder",
        expanded: false,
        children: [
            { id: "2", title: "images", icon: "folder", expanded: false, children: null, content: " SomeContent" },
            { id: "3", title: "resources", icon: "folder", expanded: false, children: null },
            { id: "4", title: "about.html", icon: "file", expanded: false, children: null },
            { id: "4", title: "contacts.html", icon: "file", expanded: false, children: null },
            { id: "5", title: "index.html", icon: "file", expanded: false, children: null },
            { id: "6", title: "portfolio.html", icon: "file", expanded: false, children: [
                { id: "7", title: "childview.html", icon: "file", expanded: false, children: null, content: "Some Content" }

            ] }
        ]
    },
    { id: "8", title: "childview.html", icon: "file", expanded: false, children: null, content: "Some Content" }
];

@Component({
  selector: "my-app",
  template: `
    <button #anchor (click)="show=!show">Toggle</button>
    <kendo-popup *ngIf="show" [animate]="false" [anchor]="anchor" [popupClass]="'isl-popup'">
        <div class="isl-panelbar">
            <kendo-panelbar [items]="data">
                <template kendoPanelBarItemTemplate let-dataItem>
                    <table>
                        <thead>
                            <tr>
                                <th>Number</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>{{dataItem}}</td>
                        </tr>
                    </table>
                </template>
            </kendo-panelbar>
        </div>
    </kendo-popup>
  `
})

export class AppComponent {
    data: any = ITEMS;
}
