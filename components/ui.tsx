"use client";
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import clsx from 'clsx';

export function Button({ children, className, onClick, type = 'button' }: { children: React.ReactNode; className?: string; onClick?: () => void; type?: 'button' | 'submit' | 'reset' }) {
  return (
    <button type={type} onClick={onClick} className={clsx('px-4 py-2 rounded bg-primaryViolet text-white hover:bg-primaryCyan transition', className)}>
      {children}
    </button>
  );
}

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={clsx('rounded shadow-sm border border-borders-hairline', className)}>{children}</div>;
}

export function Badge({ children, variant = 'default', className }: { children: React.ReactNode; variant?: 'default' | 'success' | 'warning' | 'danger'; className?: string }) {
  const colors = {
    default: 'bg-gray-600 text-white',
    success: 'bg-emeraldSuccess text-white',
    warning: 'bg-amberWarning text-white',
    danger: 'bg-roseDanger text-white',
  };
  return <span className={clsx('px-2 py-0.5 rounded text-xs', colors[variant], className)}>{children}</span>;
}

export function Input({ label, textarea = false, ...rest }: { label: string; textarea?: boolean } & React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const classNames = 'px-3 py-2 rounded bg-surface1 text-white border border-borders-hairline focus:outline-none focus:ring-2 focus:ring-primaryViolet';
  if (textarea) {
    const Tag = 'textarea';
    return (
      <div className="flex flex-col space-y-1">
        <label className="text-sm font-medium text-primaryCyan">{label}</label>
        <Tag className={clsx(classNames, 'h-32 resize-none')} {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      </div>
    );
  }
  const Tag = 'input';
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-primaryCyan">{label}</label>
      <Tag className={classNames} {...(rest as React.InputHTMLAttributes<HTMLInputElement>)} />
    </div>
  );
}

export function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="bg-surface3 rounded-lg w-full max-w-md p-4 relative text-white">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-white">
          <X size={20} />
        </button>
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        {children}
      </div>
    </div>
  );
}