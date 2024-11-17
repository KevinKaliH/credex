export class AuthSessionUtil {
  static saveSession(user: any) {
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  static getAuthSession(): any | null {
    const data = sessionStorage.getItem("user");
    if (!data) return null;
    return JSON.parse(data);
  }

  static clearSession() {
    sessionStorage.clear();
  }
}
