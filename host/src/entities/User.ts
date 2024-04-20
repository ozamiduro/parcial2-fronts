export type Roles = "client" | "admin";

export interface User {
  email: string;
  name: string;
  password: string;
  role: Roles;
  token: string;
}
