import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LOCALSTORAGE, PLANS } from 'src/app/data';
import { Contract, Customer, Plan } from 'src/app/models';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent {
  public customerForm: FormGroup;
  public contractForm: FormGroup;

  public plans: Plan[] = PLANS;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.customerForm = this.fb.group({
      id: uuidv4(),
      name: [''],
      phoneNumber: [''],
      email: [''],
      nif: [''],
      isHolder: [false],
      adress: [''],
      postalCode: [''],
      currentCost: [''],
      observation: [''],
    });

    this.contractForm = this.fb.group({
      isContractAssigned: [false],
      contractAssignDate: [null],
      plan: [null],
    });

    const customerId = this.route.snapshot.paramMap.get('id');
    const customer =
      this.getStoredCustomers().find((c) => c.id === customerId) || null;

    this.customerForm.patchValue({ ...customer });
    this.contractForm.patchValue({
      ...customer?.contract,
      plan: customer?.contract?.plan?.id,
    });
  }

  public back() {
    this.location.back();
  }

  public save() {
    const customer: Customer = this.customerForm.getRawValue();
    const contract: Contract = this.contractForm.getRawValue();
    const plan = this.plans.find(
      (p) => p.id === this.contractForm.get('plan')?.value
    );

    contract.plan = plan;
    customer.contract = contract;

    const storedClients: Customer[] = this.getStoredCustomers();

    const oldCustomerStateIndex = storedClients.findIndex(
      (c) => c.id === customer.id
    );

    if (oldCustomerStateIndex !== -1) {
      storedClients[oldCustomerStateIndex] = customer;
    } else {
      storedClients.push(customer);
    }

    localStorage.setItem(LOCALSTORAGE.CLIENTS, JSON.stringify(storedClients));
  }

  private getStoredCustomers(): Customer[] {
    return (
      JSON.parse(localStorage.getItem(LOCALSTORAGE.CLIENTS) as string) || []
    );
  }
}
