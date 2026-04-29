export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">中山プロジェクト 2026</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              プロジェクト概要と進捗状況
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              このサイトは、中山プロジェクト 2026 の進捗状況と詳細情報を紹介しています。
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                <p>リアルタイムの進捗追跡</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                <p>プロジェクトマイルストーン</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                <p>チーム情報</p>
              </div>
            </div>
          </div>

          {/* Status Card */}
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-6">プロジェクトステータス</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span>全体進捗</span>
                  <span className="text-blue-400 font-semibold">開発中</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-700 rounded p-4">
                  <p className="text-slate-400 text-sm">プロジェクト開始</p>
                  <p className="text-xl font-bold">2026年4月</p>
                </div>
                <div className="bg-slate-700 rounded p-4">
                  <p className="text-slate-400 text-sm">予定終了</p>
                  <p className="text-xl font-bold">2026年12月</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-700">
        <h3 className="text-3xl font-bold mb-12 text-center">主な機能</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition">
            <div className="text-3xl mb-4">📊</div>
            <h4 className="text-xl font-bold mb-3">進捗ダッシュボード</h4>
            <p className="text-slate-300">プロジェクトの進捗状況をリアルタイムで追跡できます。</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition">
            <div className="text-3xl mb-4">👥</div>
            <h4 className="text-xl font-bold mb-3">チーム紹介</h4>
            <p className="text-slate-300">プロジェクトに携わるチームメンバーの情報です。</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition">
            <div className="text-3xl mb-4">📅</div>
            <h4 className="text-xl font-bold mb-3">マイルストーン</h4>
            <p className="text-slate-300">重要な目標と期限を一覧で確認できます。</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 max-w-6xl mx-auto px-6 py-12 text-slate-400 text-center">
        <p>© 2026 Nakayama Project. All rights reserved.</p>
      </footer>
    </div>
  );
}
