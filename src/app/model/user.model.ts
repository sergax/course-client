export class User {
  id: bigint;
  firstName: string;
  lastName: string;
  email: string;
  created: Date;
  updated: Date;
  role: string;

  constructor(id: bigint, role: string, firstName: string, lastName: string, email: string, created: Date, updated: Date) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.created = created;
    this.updated = updated;
    this.role = role;
  }
}
