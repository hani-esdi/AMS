import { User as UserType } from '@/types/user';
import { Policy as PolicyType } from '@/types/policy';
import { Claim as ClaimType } from '@/types/claim';
import { Client as ClientType } from '@/types/client';
import { Agent as AgentType } from '@/types/agent';
import { Document as DocumentType } from '@/types/document';

// Re-export types for database schema
export type User = UserType;
export type Policy = PolicyType;
export type Claim = ClaimType;
export type Client = ClientType;
export type Agent = AgentType;
export type Document = DocumentType;

export interface AuditLog {
  id: string;
  action: 'CREATE' | 'UPDATE' | 'DELETE' | 'LOGIN' | 'LOGOUT' | 'UPLOAD' | 'DOWNLOAD';
  entity_type: 'USER' | 'POLICY' | 'CLAIM' | 'CLIENT' | 'AGENT' | 'DOCUMENT';
  entity_id: string;
  user_id: string;
  user_name?: string;
  description: string;
  old_values?: string;
  new_values?: string;
  ip_address?: string;
  user_agent?: string;
  created_at: string;
}