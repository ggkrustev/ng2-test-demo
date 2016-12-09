import { Component, Input, HostBinding, trigger,state,style,transition,animate} from '@angular/core';

@Component({
  selector: 'panelbar-item',
  template: `

<div class="panel-header"  (click)="toggle()" >
  <span class="panel-text panel-title">{{title}}</span>
  <div class="button-expand" >{{open?'-':'+'}}</div>
</div>
<div class="panel-block" [@openState]="open?'opened':'closed'" [style.zIndex]="zIndex">
  <div class="panel-content can-scroll">
    <ng-content ></ng-content>
  </div>
</div>
  `,
styles: [`

.panel-header{
  display:flex;

  flex-direction:row;

  flex-wrap:nowrap;

  justify-content:flex-end;


  background-color:white;
  color:#515967;
  height:40px;
  padding:0 1em;
  border-bottom-style:solid;
  border-bottom-width:1px;
  border-color:#ceced2;
}
.panel-header:hover{
  background-color:#f3f3f4;
  color:black;
}

.panel-text{
  font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration:none;

}
.panel-title{
  align-self:center;
  flex: 1;
  font-weight: 500;
  zoom:1;
}

.panel-block {
    position: relative;
}
.button-expand{
  align-self:center;
  border:0;

}
.panel-content{
  height:100%;
}
.can-scroll {
  overflow: auto;
  overflow-y: scroll; /* has to be scroll, not auto */
  -webkit-overflow-scrolling: touch;
}

  `
  ],
animations:[
  trigger('openState',[
    state('opened',style({
      height:'*',
      transform:'translateY(0)'
    })),
    state('closed',style({
      height:0,
      transform:'translateY(0)'
    })),
    transition('opened => closed',
               animate('150ms ease-in')
               //[
               //style({height:'*'}),
               //animate(250,style({height:0}))
               //]
              ),
              transition('closed => opened',
                         animate('150ms ease-out')
                        )
  ])
]
})
export class PanelBarItemComponent {
  @Input() title:string;
  @Input() open:boolean;
  @Input() zIndex: number = 0;

  toggle(){
    this.open=!this.open;
  }
}
