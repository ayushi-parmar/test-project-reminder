import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reminder } from "../models/reminder.model";
import{FormGroup} from '@angular/forms';
import { Observable, throwError } from 'rxjs';


@Injectable({
    providedIn: 'root'

}) 
export class DataService {

 public items :Array<Reminder>

  constructor() {
    this.items=[]

  }
  
  addToCart(a:Reminder) {
    this.items.push(a)
    console.log(this.items)
  }

  getdata() {
    return this.items;
  }
}
  // getItems() {
  //   return this.items;
  // }

    // apiURL = 'http://localhost:4200';

    // constructor(private http: HttpClient) { }

    // httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json'
    //     })
    //   }  
    //   getReminder(items): Observable<Reminder[]> {
    //     return this.http.get<Reminder[]>(items,headerOption)
       
    //   }

    // post(items,body):  Observable<Reminder[]> {
    //     return this.http.post<Reminder[]>(items ,body,headerOption)
    //         }


    //  }

    // addToCart(user) {
    //     this.items.push(user);
    //   }
    
    //   getItems() {
    //     return this.items;
    //   }
    



