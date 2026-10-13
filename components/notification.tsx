"use client";
import React, { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';
import { Badge } from '@/components/ui';

export function NotificationBell() {
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    const source = new EventSource('/api/stream/notifications');
    source.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.unread) setUnread(data.unread);
    };
    return () => source.close();
  }, []);

  return (
    <button className="relative p-2 rounded-full hover:bg-surface1 transition" aria-label="Notifikasi">
      <Bell size={20} className="text-primaryCyan" />
      {unread > 0 && <Badge variant="danger" className="absolute -top-1 -right-1">{unread}</Badge>}
    </button>
  );
}
