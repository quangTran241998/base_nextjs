export interface Role {
  roleCode: string;
  roleName: string | null;
}

export interface UserInfo {
  username: string;
  roles: Role[];
}

export interface InterfaceUser {
  accountId: string;
  sessionId: string;
  token: string;
  username: string;
}
