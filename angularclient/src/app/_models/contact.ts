export class Contact {
  id: string;
  name: string;
  type: string;
  email: string;
  phoneNumber: string;

  constructor(id:string, name: string, type: string, email: string, phoneNumber: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
