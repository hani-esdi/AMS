export type UserRole = 'admin' | 'agent' | 'client' | 'ADMIN' | 'AGENT' | 'CLIENT' | 'ACCOUNT_MANAGER' | 'CLAIMS_SPECIALIST' | 'UNDERWRITER' | 'COMPLIANCE_OFFICER';
export type UserStatus = 'active' | 'inactive' | 'suspended';

export interface Permission {
  id: string;
  name: string;
  description?: string;
  category: string;
  created_at?: string;
  updated_at?: string;
  granted_at?: string;
  granted_by_name?: string;
  granted_by_email?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status?: UserStatus;
  last_login?: string;
  created_at?: string;
  updated_at?: string;
  permissions?: Permission[];
}

export interface UserWithPermissions extends User {
  permissions: Permission[];
}