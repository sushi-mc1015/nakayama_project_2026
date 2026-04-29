'use client';

import { useState } from 'react';
import { ActivityForm } from '@/components/ActivityForm';
import { ActivityList } from '@/components/ActivityList';

export default function AdminPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">中山プロジェクト 2026 - 管理画面</h1>
          <a
            href="/"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            ← ホーム
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
          <h2 className="text-3xl font-bold mb-12">活動記録管理</h2>

          {/* Form Section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">新規記録を追加</h3>
            <ActivityForm onActivityAdded={() => setRefreshKey(prev => prev + 1)} />
          </div>

          {/* Divider */}
          <div className="border-t border-slate-600 my-12"></div>

          {/* List Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">記録一覧</h3>
            <ActivityList key={refreshKey} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 max-w-6xl mx-auto px-6 py-12 text-slate-400 text-center mt-12">
        <p>© 2026 Nakayama Project. All rights reserved.</p>
      </footer>
    </div>
  );
}
