export interface Policy {
  id: string;
  policy_number: string;
  client_id: string;
  agent_id: string;
  carrier_id: string;
  workflow_id?: string;
  type: 'auto' | 'home' | 'life' | 'health' | 'business' | 'other';
  status: 'active' | 'pending' | 'cancelled' | 'expired';
  start_date: string;
  end_date: string;
  premium_amount: number;
  coverage_amount: number;
  deductible: number;
  description?: string;
  created_at: string;
  updated_at: string;
  
  // Joined fields
  client_name?: string;
  agent_name?: string;
  agent_license?: string;
  carrier_name?: string;
}