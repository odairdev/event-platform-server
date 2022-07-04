import { v4 as uuidv4 } from "uuid";

export class Susbcriber {
  id: string;

  email: string;

  password: string;

  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidv4()
    }
  }
}