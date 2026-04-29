'use client';

import { useState } from 'react';
import { ActivityForm } from '@/components/ActivityForm';
import { ActivityList } from '@/components/ActivityList';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/auth/verify-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      if (response.ok) {
        setIsAuthenticated(true);
        setPassword('');
      } else {
        setError('❌ パスワードが間違っています');
        setPassword('');
      }
    } catch (err) {
      setError('❌ エラーが発生しました');
    }
  };

  // Password Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white flex items-center justify-center">
        {/* Background Glow */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        </div>

        {/* Password Form */}
        <div className="relative z-10 max-w-md w-full px-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 border border-slate-700/50 backdrop-blur space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold">管理ページ</h1>
              <p className="text-slate-400">パスワードを入力してください</p>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  パスワード
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  autoFocus
                />
              </div>

              {error && (
                <div className="text-red-400 text-sm font-medium">{error}</div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
              >
                ログイン
              </button>
            </form>

            <div className="text-center">
              <a href="/" className="text-slate-400 hover:text-blue-400 transition text-sm">
                ← ホームに戻る
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Admin Screen
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
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-6 rounded-lg transition transform hover:scale-105"
            >
              ← ホームに戻る
            </a>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-6 rounded-lg transition transform hover:scale-105"
            >
              ログアウト
            </button>
          </div>
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
