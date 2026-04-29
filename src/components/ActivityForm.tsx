'use client';

import { useState } from 'react';

interface ActivityFormProps {
  onActivityAdded: () => void;
}

export function ActivityForm({ onActivityAdded }: ActivityFormProps) {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    setDate('');
    setDescription('');
    setPassword('');
    setMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/activities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date, description, password }),
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
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          + 活動記録を追加
        </button>
      </div>

      {/* モーダルオーバーレイ */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-600 w-full max-w-md shadow-xl">
            <h3 className="text-2xl font-bold mb-6">活動記録を追加</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-2">日付</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full bg-slate-600 border border-slate-500 rounded px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">何をしたか</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  placeholder="例：サーバーの設定を完了、フロントエンド開発開始"
                  rows={4}
                  className="w-full bg-slate-600 border border-slate-500 rounded px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">パスワード</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="パスワード入力"
                  className="w-full bg-slate-600 border border-slate-500 rounded px-3 py-2 text-white"
                />
              </div>

              {message && (
                <p
                  className={`text-sm p-2 rounded ${
                    message.includes('✅')
                      ? 'bg-green-900 text-green-200'
                      : 'bg-red-900 text-red-200'
                  }`}
                >
                  {message}
                </p>
              )}

              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-green-500 hover:bg-green-600 disabled:bg-gray-500 text-white font-bold py-2 px-4 rounded transition"
                >
                  {loading ? '送信中...' : '送信'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition"
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
