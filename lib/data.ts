import { KPI, Blast, TeamNode, UserProfile } from './types';

export const kpis: KPI[] = [
  { id: '1', title: 'Delivery Rate', value: '98.7%', description: 'Persentase blast terkirim' },
  { id: '2', title: 'Open Rate', value: '54.2%', description: 'Email dibuka' },
  { id: '3', title: 'Click Rate', value: '12.4%', description: 'Link diklik' },
  { id: '4', title: 'Bounce Rate', value: '1.1%', description: 'Email tidak dapat dikirim' },
];

export const blasts: Blast[] = [];

export const teams: TeamNode[] = [
  {
    id: 't1',
    name: 'Tim Utama',
    children: [
      { id: 't1-1', name: 'Sub Tim A' },
      { id: 't1-2', name: 'Sub Tim B' },
    ],
  },
  { id: 't2', name: 'Tim Pendukung' },
];

export const userProfile: UserProfile = {
  id: 'u1',
  name: 'Budi Santoso',
  email: 'budi@example.com',
  role: 'ADMIN',
};
