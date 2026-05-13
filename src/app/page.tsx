'use client';

import { useState, useEffect } from 'react';
import { ActivityList } from '@/components/ActivityList';

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [particles, setParticles] = useState<Array<{id: number; left: number; top: number; delay: number}>>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) opacity(0.3); }
          50% { transform: translateY(-20px) opacity(0.8); }
        }
        .particle {
          animation: float 6s infinite ease-in-out;
        }
      `}</style>

      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black"></div>
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-5"></div>
        
        {/* Particles */}
        <div className="absolute inset-0">
          {particles.map(p => (
            <div
              key={p.id}
              className="particle absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                animationDelay: `${p.delay}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-slate-800/50 backdrop-blur-md bg-black/30 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center font-bold">
              N
            </div>
            <h1 className="text-2xl font-bold tracking-wider">NAKAYAMA 2026</h1>
          </div>
          <div className="flex items-center gap-8">
            <a href="/admin" className="text-sm hover:text-blue-400 transition">ADMIN</a>
            <a
              href="/admin"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition transform hover:scale-105"
            >
              その他
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="space-y-6 max-w-4xl">
          <div className="space-y-2">
            <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm">Welcome to</p>
            <h2 className="text-8xl md:text-9xl font-black leading-tight tracking-tighter">
              NAKAYAMA
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                PROJECT 2026
              </span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-slate-300 font-light">
            ～私たちのプロジェクトへようこそ～
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            革新的なソリューション構築と組織横断的なチーム協働を実現するプロジェクト
          </p>
          <div className="pt-8">
            <a
              href="#activities"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              毎日の活動記録を見る
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">主な機能</h3>
          <p className="text-slate-400">プロジェクト管理に必要な全ての機能</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition">
            <div className="text-5xl mb-4 group-hover:scale-110 transition">📊</div>
            <h4 className="text-xl font-bold mb-3">リアルタイム進捗</h4>
            <p className="text-slate-400">プロジェクトの進捗状況を常に把握</p>
          </div>

          <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition">
            <div className="text-5xl mb-4 group-hover:scale-110 transition">👥</div>
            <h4 className="text-xl font-bold mb-3">チームメンバー</h4>
            <p className="text-slate-400">チームメンバー</p>
          </div>

          <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition">
            <div className="text-5xl mb-4 group-hover:scale-110 transition">📸</div>
            <h4 className="text-xl font-bold mb-3">活動記録</h4>
            <p className="text-slate-400">写真付きの活動記録を保存</p>
          </div>
        </div>
      </section>

      {/* Activity Section */}
      <section id="activities" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-4xl font-bold">活動記録</h3>
            <p className="text-slate-400">プロジェクトの進展を時系列で確認</p>
          </div>
          <ActivityList key={refreshKey} />
          <div className="text-center pt-8">
            <a
              href="/admin"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              + 新しい記録を追加
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/50 max-w-7xl mx-auto px-6 py-12 text-slate-400 text-center">
        <p>© 2026 Nakayama Project. All rights reserved.</p>
      </footer>
    </div>
  );
}
