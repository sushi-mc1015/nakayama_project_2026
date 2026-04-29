'use client';

import { useEffect, useState } from 'react';

interface Activity {
  id: string;
  date: string;
  description: string;
  timestamp: number;
  image?: string;
}

export function ActivityList() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const response = await fetch('/api/activities');
      const data = await response.json();
      setActivities(data.activities);
    } catch (error) {
      console.error('Failed to fetch activities:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block">
          <div className="w-8 h-8 border-3 border-slate-700 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
        <p className="text-slate-400 mt-3">読み込み中...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {activities.length === 0 ? (
        <div className="text-center py-16 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50">
          <div className="text-5xl mb-4">📝</div>
          <p className="text-slate-400 text-lg">活動記録がまだありません</p>
          <p className="text-slate-500 text-sm mt-2">管理ページから最初の記録を追加しましょう</p>
        </div>
      ) : (
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-slate-700"></div>

          {/* Activities */}
          <div className="space-y-8">
            {activities.map((activity, index) => (
              <div key={activity.id} className="relative pl-24">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-slate-900 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-blue-500/50">
                    {index + 1}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition duration-300 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden">
                  {/* Image if exists */}
                  {activity.image && (
                    <div className="relative h-48 bg-slate-700 overflow-hidden">
                      <img
                        src={activity.image}
                        alt="Activity"
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📅</span>
                        <div>
                          <h4 className="text-lg font-bold text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text">
                            {activity.date}
                          </h4>
                          <p className="text-xs text-slate-400">
                            {new Date(activity.timestamp).toLocaleString('ja-JP', {
                              month: '2-digit',
                              day: '2-digit',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed whitespace-pre-wrap text-sm">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
