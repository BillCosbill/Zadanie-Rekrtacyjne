export class Worker {
  id: string;
  name: string;
  lastName: string;
  position: string;
  phoneNumber: string;
  status: boolean;

  constructor(id: string, name: string, lastName: string, position: string, phoneNumber: string, status: boolean) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.position = position;
    this.phoneNumber = phoneNumber;
    this.status = status;
  }
}
