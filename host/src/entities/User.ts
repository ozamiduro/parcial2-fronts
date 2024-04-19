type Roles = "user" | "admin";

export interface User {
  email: string;
  username: string;
  password: string;
  rol: Roles;
}
