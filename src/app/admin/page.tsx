'use client';

import { useState } from 'react';
import { ActivityForm } from '@/components/ActivityForm';
import { ActivityList } from '@/components/ActivityList';

export default function AdminPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white">
      {/* Background Glow Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-slate-800 backdrop-blur-sm bg-slate-950/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center font-bold text-lg">
              ⚙
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                管理画面
              </h1>
              <p className="text-xs text-slate-400">活動記録の管理</p>
            </div>
          </div>
          <a
            href="/"
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-6 rounded-lg transition transform hover:scale-105"
          >
            ← ホームに戻る
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        <div className="space-y-12">
          {/* Form Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">新規記録を追加</h2>
              <p className="text-slate-400">プロジェクトの進展を記録しましょう</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 border border-slate-700/50 backdrop-blur">
              <ActivityForm onActivityAdded={() => setRefreshKey(prev => prev + 1)} />
            </div>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700/50"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-slate-900 text-slate-400 text-sm">または</span>
            </div>
          </div>

          {/* List Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">記録一覧</h2>
              <p className="text-slate-400">これまでの全ての活動記録</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 border border-slate-700/50 backdrop-blur">
              <ActivityList key={refreshKey} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 max-w-6xl mx-auto px-6 py-12 text-slate-400 text-center relative z-10 mt-20">
        <p>© 2026 Nakayama Project. All rights reserved.</p>
      </footer>
    </div>
  );
}
