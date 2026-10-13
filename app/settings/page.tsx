'use client';

import { useState } from 'react';
import { Card, Button, Input } from '@/components/ui';
import { userProfile } from '@/lib/data';

export default function Settings() {
  const [profile, setProfile] = useState(userProfile);
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);

  const save = () => {
    setProfile({ ...profile, name, email });
    setEdit(false);
  };

  return (
    <section className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-primaryViolet">Pengaturan Profil</h2>
      <Card className="p-4 bg-surface3 text-white">
        <div className="space-y-4">
          <Input label="Nama" value={name} onChange={(e) => setName(e.target.value)} disabled={!edit} />
          <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={!edit} />
          <div className="flex justify-end space-x-2">
            {edit ? (
              <>
                <Button onClick={() => setEdit(false)}>Batal</Button>
                <Button onClick={save}>Simpan</Button>
              </>
            ) : (
              <Button onClick={() => setEdit(true)}>Ubah</Button>
            )}
          </div>
        </div>
      </Card>
    </section>
  );
}
