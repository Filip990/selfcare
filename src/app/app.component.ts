import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private service: CustomerService ) {}

  ngOnInit() {
    this.service.getCustomerInfo().subscribe(
      res => console.log(res)
    )
  }
}
