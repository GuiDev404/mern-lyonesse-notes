
class TokenService {
  constructor(){
    this.key = 'auth-presupuesto';
  }

  getStorage (key){
    return JSON.parse(localStorage.getItem(key))
  }

  setStorage (key, body){
    return localStorage.setItem(key, JSON.stringify(body))
  }

  getLocalRefreshToken() {
    const user = this.getStorage(this.key);
    return user?.refreshToken;
  }

  getLocalAccessToken() {
    const user = this.getStorage(this.key);
    return user?.accessToken;
  }

  updateLocalAccessToken(token) {
    let user = this.getStorage(this.key);
    user.accessToken = token;
    this.setStorage(this.key, user);
  }

  getUser() {
    return this.getStorage(this.key);
  }

  setUser(user) {
    this.setStorage(this.key, user);
  }

  removeUser() {
    localStorage.removeItem(this.key);
  }
}

export default new TokenService();