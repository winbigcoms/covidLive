export default class TokenService {
  static save(token, email) {
    const nickName = email.split('@')[0];
    localStorage.setItem('token', token);
    localStorage.setItem('nickName', nickName)
  }

  static tokenGet() {
    return localStorage.getItem('token')
  }
  static nickNameGet() {
    return localStorage.getItem('nickName')
  }
  static remove() {
    localStorage.removeItem('token')
    localStorage.removeItem('nickName')
  }
}
