'use client';

import { useState } from 'react';
import { Card, Button, Modal, Input } from '@/components/ui';
import { teams } from '@/lib/data';

function renderTree(nodes: any[], level = 0) {
  return nodes.map((node) => (
    <div key={node.id} className="ml-4 border-l pl-2" style={{ marginLeft: level * 1.5 + 'rem' }}>
      <Card className="p-2 bg-surface3 text-white mb-1">
        {node.name}
      </Card>
      {node.children && renderTree(node.children, level + 1)}
    </div>
  ));
}

export default function TeamManagement() {
  const [teamTree, setTeamTree] = useState(teams);
  const [open, setOpen] = useState(false);
  const [parentId, setParentId] = useState('');
  const [name, setName] = useState('');

  const addTeam = () => {
    const newTeam = { id: Date.now().toString(), name, children: [] };
    if (!parentId) {
      setTeamTree([newTeam, ...teamTree]);
    } else {
      const insert = (nodes: any[]): any[] =>
        nodes.map((n) => {
          if (n.id === parentId) {
            return { ...n, children: [newTeam, ...(n.children || [])] };
          }
          return { ...n, children: n.children ? insert(n.children) : [] };
        });
      setTeamTree(insert(teamTree));
    }
    setOpen(false);
    setName('');
    setParentId('');
  };

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-primaryViolet">Manajemen Tim Hierarkis</h2>
        <Button onClick={() => setOpen(true)}>Tambah Tim</Button>
      </div>
      {teamTree.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada tim.</p>
      ) : (
        <div>{renderTree(teamTree)}</div>
      )}
      <Modal open={open} onClose={() => setOpen(false)} title="Tambah Tim Baru">
        <div className="space-y-4">
          <Input label="Nama Tim" value={name} onChange={(e) => setName(e.target.value)} />
          <Input label="Parent ID (kosong untuk root)" value={parentId} onChange={(e) => setParentId(e.target.value)} />
          <div className="flex justify-end">
            <Button onClick={addTeam}>Simpan</Button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
