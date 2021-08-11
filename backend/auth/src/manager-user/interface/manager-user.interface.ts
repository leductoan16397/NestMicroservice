export interface ManagerUserInterface {
  id?: string;
  fullName: string;
  email: string;
  password: string;
  roles: string[];
  refreshToken: string[];
}

export class AddManagerUser {
  readonly company: string;
  readonly email: string;
}

export interface UpdateManagerUser {
  fullName: string;
  password: string;
}

export interface UpdatePayload {
  id: string;
  input: Partial<UpdateManagerUser>;
}

export enum Role {
  Admin = 'admin',
  Manager = 'manager',
  Recuiter = 'recruiter',
  User = 'user',
}
