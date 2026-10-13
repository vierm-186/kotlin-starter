import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="h-full bg-canvas">
      <head>
        <title>Kotlin Starter Kit (Next.js Edition)</title>
      </head>
      <body className="flex h-full font-sans text-base antialiased">
        {/* Placeholder UI structures until components are available */}
        <nav className="w-64 bg-surface2 text-white flex flex-col p-4 hidden md:flex">
          <span className="text-2xl font-bold text-primaryViolet mb-8">Kotlin Starter</span>
        </nav>
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center justify-between p-4 border-b border-borders-hairline bg-surface1">
            <div className="bg-surface1 rounded px-2 py-1 w-64">
              <input placeholder="Cari..." className="bg-transparent border-none focus:ring-0 outline-none text-white w-full" />
            </div>
            <div className="flex items-center space-x-4">
              <button aria-label="Notifikasi" className="relative p-2 rounded-full hover:bg-surface1 transition" />
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-white">Admin</span>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-6 bg-surface2">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}