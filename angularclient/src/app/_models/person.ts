import {Address} from './address';
import {Obtaining} from './obtaining';

export class Person {
  id: string;
  type: string;
  name: string;
  lastName: string;
  pesel: string;
  email: string;
  phoneNumber: string;
  additionalInformations: string;

  addresses: Address[];
  obtaining: Obtaining;
}
