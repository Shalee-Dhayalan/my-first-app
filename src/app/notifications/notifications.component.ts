import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  template: `<br><br><br><br><br><br><br><br><div class="alert alert-success" [hidden] = "displayNotifications">This website allows to use cookies settings.
              <div class="close"> <button class="btn"  (click)="closeNotifications()">x</button></div>
              </div>`,
  styles: [".alert-success{padding-top:10px;padding-bottom:50px;margin-left:100px 10px;text-align:center;color:Red;height:2px;width:800px}", ".close{margin-left:650px;float: right;color:Red;font-size:16px;padding-bottom:0px}" ]
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 

 displayNotifications: Boolean = false;

 closeNotifications()
 {
    this.displayNotifications = true;
 }

 
}
