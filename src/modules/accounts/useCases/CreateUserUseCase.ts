import { ISubscribersRepository } from "../repositories/ISubscribersRepository";


class CreateUserUseCase {
  constructor(
    private usersRepository: ISubscribersRepository
  ){}

  async execute() {

  }
}

export { CreateUserUseCase }