"use client";
import { useState } from 'react';
import { Card, Button, Modal, Input } from '@/components/ui';
import { blasts as initialBlasts } from '@/lib/data';

export default function Broadcast() {
  const [list, setList] = useState(initialBlasts);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addBlast = () => {
    const newBlast = {
      id: Date.now().toString(),
      title,
      content,
      status: 'DRAFT' as const,
      scheduledAt: null,
    };
    setList([newBlast, ...list]);
    setOpen(false);
    setTitle('');
    setContent('');
  };

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-primaryViolet">Broadcast Engine</h2>
        <Button onClick={() => setOpen(true)}>Buat Blast Baru</Button>
      </div>
      {list.length === 0 ? (
        <p className="text-center text-gray-500">Tidak ada blast. Klik "Buat Blast Baru".</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {list.map((b) => (
            <Card key={b.id} className="p-4 bg-surface3 text-white">
              <h3 className="font-medium">{b.title}</h3>
              <p className="mt-1 text-sm line-clamp-2">{b.content}</p>
              <span className="mt-2 inline-block text-xs bg-primaryCyan px-2 py-0.5 rounded">{b.status}</span>
            </Card>
          ))}
        </div>
      )}
      <Modal open={open} onClose={() => setOpen(false)} title="Buat Blast Baru">
        <div className="space-y-4">
          <Input label="Judul" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Input label="Konten" textarea value={content} onChange={(e) => setContent(e.target.value)} />
          <div className="flex justify-end">
            <Button onClick={addBlast}>Simpan Draft</Button>
          </div>
        </div>
      </Modal>
    </section>
  );
}