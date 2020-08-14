
import axios from 'axios';

const API_URL = 'https://api.marktube.tv/v1/me'

export default class TokenService {
  static async login(email, password) {
    const response = await axios.post(API_URL , {
      email,
      password,
    })
    console.log(response)
    return response.data.token
  }
}