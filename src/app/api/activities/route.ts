import { NextRequest, NextResponse } from 'next/server';

// メモリ内でのデータ保存（フォールバック用）
let activitiesMemory: Array<{
  id: string;
  date: string;
  description: string;
  timestamp: number;
}> = [];

const ADMIN_PASSWORD = process.env.ACTIVITY_PASSWORD || 'nakayama2026';

// Vercel KVが設定されているかチェック
const useKV = !!process.env.KV_REST_API_URL;

let kv: any = null;
if (useKV) {
  // @ts-ignore
  import('@vercel/kv').then((module) => {
    kv = module.kv;
  }).catch(() => {
    console.warn('KV not available, using in-memory storage');
  });
}

async function getActivities() {
  if (useKV && kv) {
    try {
      const data = await kv.get('activities');
      return data || [];
    } catch (error) {
      console.warn('Failed to get from KV, using memory');
      return activitiesMemory;
    }
  }
  return activitiesMemory;
}

async function saveActivities(activities: any[]) {
  if (useKV && kv) {
    try {
      await kv.set('activities', activities);
    } catch (error) {
      console.warn('Failed to save to KV, using memory');
      activitiesMemory = activities;
    }
  } else {
    activitiesMemory = activities;
  }
}

export async function GET() {
  const activities = await getActivities();
  return NextResponse.json({
    activities: activities.sort((a: any, b: any) => b.timestamp - a.timestamp),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password, date, description } = body;

    // パスワード認証
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'パスワードが正しくありません' },
        { status: 401 }
      );
    }

    // バリデーション
    if (!date || !description) {
      return NextResponse.json(
        { error: '日付と説明は必須です' },
        { status: 400 }
      );
    }

    // 新しい活動を追加
    const newActivity = {
      id: Date.now().toString(),
      date,
      description,
      timestamp: Date.now(),
    };

    const activities = await getActivities();
    activities.push(newActivity);
    await saveActivities(activities);

    return NextResponse.json(newActivity, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'エラーが発生しました' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { password, id } = body;

    // パスワード認証
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'パスワードが正しくありません' },
        { status: 401 }
      );
    }

    const activities = await getActivities();
    const filtered = activities.filter((activity: any) => activity.id !== id);
    await saveActivities(filtered);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'エラーが発生しました' },
      { status: 500 }
    );
  }
}
