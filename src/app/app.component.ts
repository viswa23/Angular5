import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App - Component Instance';
  
  //mock data
  msgPanelInfo =  {status: 'ERROR', name:'Critical VMs',desc: 'All my business-critical VMs', path: '/TINTRI/CRITICAL-VMS', numVMS: 2, numError: 5}
}