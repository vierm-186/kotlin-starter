const kpis = [
  { id: '1', title: 'Delivery Rate', value: '98.7%', description: 'Persentase blast terkirim' },
  { id: '2', title: 'Open Rate', value: '54.2%', description: 'Email dibuka' },
  { id: '3', title: 'Click Rate', value: '12.4%', description: 'Link diklik' },
  { id: '4', title: 'Bounce Rate', value: '1.1%', description: 'Email tidak dapat dikirim' },
];

import { Card } from '@/components/ui';

export default function Dashboard() {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => (
        <Card key={kpi.id} className="p-4 bg-surface3 text-white">
          <h3 className="text-sm font-medium text-primaryViolet">{kpi.title}</h3>
          <p className="mt-2 text-2xl font-bold text-emeraldSuccess">{kpi.value}</p>
          <p className="text-xs text-gray-400">{kpi.description}</p>
        </Card>
      ))}
    </section>
  );
}