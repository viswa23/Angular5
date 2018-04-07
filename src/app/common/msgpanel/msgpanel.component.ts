import { Component,Input, OnInit } from '@angular/core';
import{ MsgProp } from'./msgpanel.model';

@Component({
  selector: 'app-msgpanel',
  templateUrl: './msgpanel.component.html',
  styleUrls: ['./msgpanel.component.css']
})
export class MsgpanelComponent implements OnInit {
  @Input() msgProp = new MsgProp();
  constructor() { }

  ngOnInit() {
    
  }

}
