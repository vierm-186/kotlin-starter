"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Mail, Users, Settings } from 'lucide-react';
import { clsx } from 'clsx';

const items = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/broadcast', label: 'Broadcast', icon: Mail },
  { href: '/team', label: 'Tim', icon: Users },
  { href: '/settings', label: 'Pengaturan', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className="w-64 bg-surface2 text-white flex flex-col p-4 hidden md:flex">
      <div className="flex items-center mb-8">
        <span className="text-2xl font-bold text-primaryViolet">Kotlin Starter</span>
      </div>
      <ul className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <li key={item.href}>
              <Link href={item.href} className={clsx('flex items-center p-2 rounded hover:bg-surface1 transition', active && 'bg-surface1')}>
                <Icon size={18} className={clsx('mr-3', active ? 'text-primaryViolet' : 'text-gray-400')} />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
