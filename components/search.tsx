"use client";
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder: biasanya akan mengarahkan ke /search?q=...
    console.log('Mencari:', query);
  };
  return (
    <form onSubmit={handleSearch} className="flex items-center bg-surface1 rounded px-2 py-1">
      <Search size={16} className="text-gray-400 mr-2" />
      <Input label="" placeholder="Cari..." value={query} onChange={(e) => setQuery(e.target.value)} className="bg-transparent border-none focus:ring-0" />
    </form>
  );
}
