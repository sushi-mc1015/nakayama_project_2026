'use client';

import { useState } from 'react';

interface ActivityFormProps {
  onActivityAdded: () => void;
}

export function ActivityForm({ onActivityAdded }: ActivityFormProps) {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    setDate('');
    setDescription('');
    setPassword('');
    setImage(null);
    setImagePreview(null);
    setMessage('');
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // ファイルサイズチェック（5MB）
      if (file.size > 5 * 1024 * 1024) {
        setMessage('❌ 画像のサイズが大きすぎます（5MB以下）');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImage(result);
        setImagePreview(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/activities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date, description, password, image }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(`❌ ${data.error}`);
        return;
      }

      setMessage('✅ 記録を追加しました！');
      onActivityAdded();
      // 成功したらモーダルを即座に閉じる
      setTimeout(() => {
        closeModal();
      }, 800);
    } catch (error) {
      setMessage('❌ エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full max-w-2xl mx-auto">
        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 shadow-lg shadow-blue-500/25 text-lg"
        >
          + 新しい記録を追加
        </button>
      </div>

      {/* モーダルオーバーレイ */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text">
                活動記録を追加
              </h3>
              <button
                onClick={closeModal}
                className="text-slate-400 hover:text-slate-200 text-2xl font-bold transition"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3 text-slate-200">📅 日付を選択</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-slate-700 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-slate-200">📝 何をしたか</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  placeholder="例：サーバーの設定を完了、フロントエンド開発開始"
                  rows={5}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-slate-700 transition resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-slate-200">🖼️ 写真を追加（オプション）</label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="w-full hidden"
                    id="image-input"
                  />
                  <label
                    htmlFor="image-input"
                    className="w-full bg-slate-700/50 border-2 border-dashed border-slate-600/50 rounded-lg px-4 py-6 text-center cursor-pointer hover:border-blue-500/50 hover:bg-slate-700 transition flex flex-col items-center justify-center gap-2"
                  >
                    <span className="text-2xl">📸</span>
                    {imagePreview ? (
                      <span className="text-sm text-green-300">画像が選択されました</span>
                    ) : (
                      <>
                        <span className="text-sm text-slate-300">クリックして画像を選択</span>
                        <span className="text-xs text-slate-500">（5MB以下）</span>
                      </>
                    )}
                  </label>
                </div>
                {imagePreview && (
                  <div className="mt-3 relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-40 object-cover rounded-lg border border-slate-600/50"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImage(null);
                        setImagePreview(null);
                      }}
                      className="absolute top-2 right-2 bg-red-500/80 hover:bg-red-600 text-white px-2 py-1 rounded text-xs font-bold transition"
                    >
                      削除
                    </button>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-slate-200">🔐 パスワード</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="パスワードを入力"
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-slate-700 transition"
                />
              </div>

              {message && (
                <div
                  className={`p-4 rounded-lg text-sm font-medium ${
                    message.includes('✅')
                      ? 'bg-green-900/30 border border-green-600/50 text-green-300'
                      : 'bg-red-900/30 border border-red-600/50 text-red-300'
                  }`}
                >
                  {message}
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-3 px-4 rounded-lg transition transform hover:scale-105 shadow-lg"
                >
                  {loading ? '送信中...' : '送信'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-lg transition"
                >
                  キャンセル
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
