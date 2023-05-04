import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { LOCALSTORAGE } from 'src/app/data';
import { Customer } from 'src/app/models';

@Component({
  selector: 'app-my-customers',
  templateUrl: './my-customers.component.html',
  styleUrls: ['./my-customers.component.scss'],
})
export class MyCustomersComponent {
  public customers: Customer[];

  constructor(private location: Location) {
    this.customers = this.getCustomers();
    this.customers = [
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
      ...this.getCustomers(),
    ];
  }

  public back() {
    this.location.back();
  }

  private getCustomers() {
    return (
      JSON.parse(localStorage.getItem(LOCALSTORAGE.CLIENTS) as string) || []
    );
  }
}
