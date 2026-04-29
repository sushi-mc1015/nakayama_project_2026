'use client';

import { useState } from 'react';
import { ActivityList } from '@/components/ActivityList';

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-slate-800 backdrop-blur-sm bg-slate-950/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center font-bold text-lg">
              中
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nakayama 2026
            </h1>
          </div>
          <a
            href="/admin"
            className="text-slate-300 hover:text-blue-400 transition text-sm font-medium"
          >
            管理ページ
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                🚀 Innovation Project
              </div>
              <h2 className="text-6xl font-bold leading-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                プロジェクト概要と進捗
              </h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">
              中山プロジェクト 2026 は、革新的なソリューションの構築を目指す組織横断的なプロジェクトです。リアルタイムの進捗追跡とチーム連携を実現しています。
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                <p className="text-slate-300">リアルタイム進捗追跡システム</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                <p className="text-slate-300">チーム協働プラットフォーム</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                <p className="text-slate-300">マイルストーン管理機能</p>
              </div>
            </div>
          </div>

          {/* Status Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 backdrop-blur">
              <h3 className="text-2xl font-bold mb-8 text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text">
                プロジェクトステータス
              </h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-slate-300">全体進捗</span>
                    <span className="text-blue-400 font-semibold text-sm">開発中: 60%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full shadow-lg shadow-blue-500/50 transition-all" 
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700/30 hover:bg-slate-700/50 rounded-lg p-4 border border-slate-600/30 transition">
                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">開始日</p>
                    <p className="text-2xl font-bold">2026年4月</p>
                  </div>
                  <div className="bg-slate-700/30 hover:bg-slate-700/50 rounded-lg p-4 border border-slate-600/30 transition">
                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">終了予定</p>
                    <p className="text-2xl font-bold">2026年12月</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-4xl font-bold">主な機能</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">プロジェクト管理に必要な全ての機能を備えています</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">📊</div>
              <h4 className="text-xl font-bold mb-3">進捗ダッシュボード</h4>
              <p className="text-slate-400 leading-relaxed">プロジェクトの進捗状況をリアルタイムで追跡できます。</p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">👥</div>
              <h4 className="text-xl font-bold mb-3">チーム紹介</h4>
              <p className="text-slate-400 leading-relaxed">プロジェクトに携わるチームメンバーの情報です。</p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">📅</div>
              <h4 className="text-xl font-bold mb-3">マイルストーン</h4>
              <p className="text-slate-400 leading-relaxed">重要な目標と期限を一覧で確認できます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="space-y-12">
          <div className="flex items-end justify-between">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">活動記録</h3>
              <p className="text-slate-400">プロジェクトの進展を時系列で確認</p>
            </div>
            <a
              href="/admin"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              + 記録を追加
            </a>
          </div>
          <ActivityList key={refreshKey} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 max-w-6xl mx-auto px-6 py-12 text-slate-400 text-center relative z-10">
        <p>© 2026 Nakayama Project. All rights reserved.</p>
      </footer>
    </div>
  );
}
