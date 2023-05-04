import { Plan } from './plan';

export interface Contract {
  isContractAssigned: boolean;
  contractAssignDate: Date;
  plan?: Plan;
}
