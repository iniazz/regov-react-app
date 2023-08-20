class AuthService {
    static register(userData: any) {
        // Your registration logic
        localStorage.setItem('user', JSON.stringify(userData));
      }
    
  
    static login(credentials: any) {
      // Your login logic
      // After successful login, store user data in localStorage
      localStorage.setItem('user', JSON.stringify(credentials));
    }
  
    static logout() {
      // Your logout logic
      // Remove user data from localStorage on logout
      localStorage.removeItem('user');
    }
  
    static getCurrentUser() {
      // Retrieve and parse user data from localStorage
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
  }
  
  export default AuthService;
  