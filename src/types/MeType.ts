export interface Me {
  id: number;
  username: string;
  fullname: string;
  email: string;
  phone_number: string;
  role: Role;
}

export interface Role {
  name: string;
  permissions: Permission;
}

export interface Permission {
  read: boolean;
  write: boolean;
  update: boolean;
  remove: boolean;
}
