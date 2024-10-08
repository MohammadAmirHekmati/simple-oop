export class UserService {
  private users = [];

  createUser(user) {

    this.users.push(user);
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }
}
