export interface KPI {
  id: string;
  title: string;
  value: string;
  description: string;
}

export interface Blast {
  id: string;
  title: string;
  content: string;
  status: 'DRAFT' | 'SCHEDULED' | 'QUEUED' | 'SENDING' | 'COMPLETED';
  scheduledAt: string | null;
}

export interface TeamNode {
  id: string;
  name: string;
  children?: TeamNode[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'OWNER' | 'ADMIN' | 'EDITOR' | 'VIEWER' | 'FINANCE' | 'MEMBER';
}
