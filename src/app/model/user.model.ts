export class User {
  id: bigint;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  created: Date;
  updated: Date;
  coursesId: Array<number>

  constructor(id: bigint, role: string, firstName: string, lastName: string, email: string, created: Date, updated: Date, coursesId: Array<number>) {
    this.id = id;
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.created = created;
    this.updated = updated;
    this.coursesId = coursesId;
  }
}
