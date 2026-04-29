'use client';

import { useEffect, useState } from 'react';

interface Activity {
  id: string;
  date: string;
  description: string;
  timestamp: number;
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

  const refreshActivities = () => {
    fetchActivities();
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-slate-400">読み込み中...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">活動履歴</h3>
        <button
          onClick={refreshActivities}
          className="text-sm bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded transition"
        >
          更新
        </button>
      </div>

      {activities.length === 0 ? (
        <div className="text-center py-12 bg-slate-800 rounded-lg border border-slate-700">
          <p className="text-slate-400">活動記録がまだありません</p>
        </div>
      ) : (
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-semibold text-blue-400">
                  📅 {activity.date}
                </h4>
                <span className="text-xs text-slate-400">
                  {new Date(activity.timestamp).toLocaleString('ja-JP')}
                </span>
              </div>
              <p className="text-slate-300 whitespace-pre-wrap">{activity.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
