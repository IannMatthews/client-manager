import { Contract } from './contract';

export interface Customer {
  id: string;
  name: string;
  phoneNumber?: number;
  email: string;
  nif?: number;
  isHolder?: boolean;
  adress: string;
  postalCode: string;
  currentCost?: number;
  observation: string;

  contract?: Contract;
}
