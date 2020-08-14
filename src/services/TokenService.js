export default class SigninService {
  static save(token) {
    localStorage.setItem('token', token);
  }

  static get() {
    return localStorage.getItem('token')
  }
}
