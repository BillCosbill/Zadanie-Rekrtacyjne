import {Address} from './address';
import {Obtaining} from './obtaining';
import {Worker} from './worker';

export class Firm {
  id: string;
  type: string;
  name: string;
  nip: string;
  regon: string;
  krs: string;
  legalForm: string;
  phoneNumber: string;
  email: string;
  additionalInformations: string;

  addresses: Address[];
  obtaining: Obtaining;
  workers: Worker[];
}
