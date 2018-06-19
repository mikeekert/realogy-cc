export class Appointment {
  date: DateObj;
  email: string;
  fname: string;
  lastname: string;

  constructor(data: Appointment) {
    this.date = data.date;
    this.email = data.email;
    this.fname = data.fname;
    this.lastname = data.lastname;
  }
}

export interface DateObj {
  'year': number;
  'month': number;
  'day': number;
}
