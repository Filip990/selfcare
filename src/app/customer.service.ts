import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private httpClient: HttpClient ) { }

  public getCustomerInfo() {
    let offers = this.httpClient.get('https://selfcare-service.demo.melita.com/interview/api/offers');
    let subs =  this.httpClient.get('https://selfcare-service.demo.melita.com/interview/api/offers/100/subscriptions');

    return forkJoin([ offers, subs ]) // When all observables complete forkJoin emits the last value from each, we subscribe to it in app.component
  }
}
