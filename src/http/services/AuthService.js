import api from "../axios.js";

export default class AuthService {
  static async login(email, password) {
    return api.post("auth/login", { email, password });
  }
  static async registration(email, password, userIcon, userColor) {
    return api.post("auth/register", { email, password, userIcon, userColor });
  }

  static async logout() {
    return api.post("auth/logout");
  }
}
