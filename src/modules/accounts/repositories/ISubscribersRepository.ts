import { Susbcriber } from "../infra/entities/Subscriber";

export interface ISubscribersRepository {
  create(email: string): Promise<Susbcriber>
}