export interface LoginProps {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
}
