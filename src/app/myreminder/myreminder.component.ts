import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Reminder } from "../models/reminder.model";
import { PushNotificationsService} from 'ng-push';
import { CookieService } from 'ngx-cookie-service';

import {DataService} from "../service/dataservice"
@Component({
  selector: 'app-myreminder',
  templateUrl: './myreminder.component.html',
  styleUrls: ['./myreminder.component.css']
})
export class MyreminderComponent implements OnInit {

  notificationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    iteration: new FormControl('', Validators.required)

        });
   title = 'notification';
   public submitted = false;  
   public show = true;  
   public users :Array<Reminder>
   public value;
   public reminder;
   editIndex = null;
   cookieValue = 'UNKNOWN';
   
   public key="item1"



constructor(private _pushNotifications: PushNotificationsService, private apiservice:DataService ,private cookieService: CookieService ){
 this._pushNotifications.requestPermission();

 this.users=[]
}
ngOnInit(): void {
  this.users=this.apiservice.getdata() 
}
get f() { return this.notificationForm.controls; }


  add() {
   // if (this.notificationForm.value.name == "" || this.notificationForm.value.name == undefined&&this.notificationForm.value.time==""||this.notificationForm.value.time==undefined) {
     this.submitted = true;
   // }
   if(!this.notificationForm.valid) {
     return false;

   }
   else{
       this.reminder = new Reminder(this.notificationForm.value.name,this.notificationForm.value.time,this.notificationForm.value.iteration)
       // this.reminder = new Reminder(this.notificationForm.value.time)
       console.log(this.reminder)

     this.apiservice.addToCart(this.reminder)
// console.log(this.apiservice.addToCart(this.reminder))

      //  this.users.push(this.reminder)
       this.notificationForm.reset();


       }
   }

 details(i) {
   this.show = false;
   let  data = this.users[i];
   this.notificationForm.get('name').setValue(data.getName());
   this.notificationForm.get('time').setValue(data.getTime());
   this.notificationForm.get('iteration').setValue(data.getiteration());

   this.editIndex=i;
 }
 delete(i){
   this.users.splice(i, 1);
   this.notificationForm.reset();


 }
 
 save() {
   this.show=true;
   this.reminder = new Reminder(this.notificationForm.value.name,this.notificationForm.value.time,this.notificationForm.value.iteration)
   this.users[this.editIndex] = this.reminder;
   this.myFunction();

   this.notificationForm.reset();

 }

 notify(){ //our function to be called on click

   // var dts = Math.floor(Date.now()-Date.now()+5);
  var Test="jhjhj"

var options = {
 body: 'this is msg body',
 // timestamp: dts
}

var n = new Notification(Test );

//      this._pushNotifications.create('Iron Man', options).subscribe( //creates a notification
//         res => console.log(res),
//         err => console.log(err)
//     );
 }
   myFunction() {


   if(!this.notificationForm.valid) {
     return false;
   }
   else{
   this.reminder = new Reminder(this.notificationForm.value.name,this.notificationForm.value.time,this.notificationForm.value.iteration)
   var x=this.reminder.Name
   var y=this.reminder.Time
   var count=this.reminder.Iteration
   var time=parseInt(y)*60000;
   console.log(iterations)
   
// var interval =setTimeout(function(){ alert(x); }, z);
 
   var iterations = 0;
   var interval = setInterval(foo, 600);
   function foo() {
       iterations++;
       var v =count-(iterations)
       if (iterations >= count)
           clearInterval(interval);
          //  var n = new Notification(x);

          var options = {
            // data: x,
            body: 'iteration left ' + v
          }
          
          var n = new Notification(x ,options);
       // alert(x);0
   }


 }
 }
 
};