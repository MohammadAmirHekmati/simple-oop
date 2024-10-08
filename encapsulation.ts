class User {
    private password: string;
    public username: string;
  
    constructor(username: string, password: string) {
      this.username = username;
      this.password = password;
    }
  
    setPassword(newPassword: string) {
      this.password = newPassword;
    }
  
    checkPassword(password: string): boolean {
      return this.password === password;
    }
  }
  
  const user = new User('john_doe', 'securepassword');
  user.setPassword('newpassword');
  console.log(user.checkPassword('newpassword')); // true
  