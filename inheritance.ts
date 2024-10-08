class User {
    constructor(public id: number, public name: string) {}
  }
  
  class AdminUser extends User {
    constructor(id: number, name: string, public adminLevel: number) {
      super(id, name);
    }
  }
  
  class GuestUser extends User {
    constructor(id: number, name: string, public guestPass: string) {
      super(id, name);
    }
  }
  
  const admin = new AdminUser(1, 'Admin', 5);
  const guest = new GuestUser(2, 'Guest', 'GUEST123');
  