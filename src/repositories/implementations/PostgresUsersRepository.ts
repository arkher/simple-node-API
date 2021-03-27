import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUserRepository implements IUsersRepository {
  private users: User[] = [];
  
  async findByEmail(email: string): Promise<User> {
    // simulando busca no banco
    const user = this.users.find(user => user.email === email);
    return user;
  }
  
  async save(user: User): Promise<void> {
    // simulando inserção
    this.users.push(user);
  }
}