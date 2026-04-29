import { NextRequest, NextResponse } from 'next/server';

// メモリ内でのデータ保存
let activitiesMemory: Array<{
  id: string;
  date: string;
  description: string;
  timestamp: number;
}> = [];

const ADMIN_PASSWORD = process.env.ACTIVITY_PASSWORD || 'nakayama2026';

export async function GET() {
  return NextResponse.json({
    activities: activitiesMemory.sort((a, b) => b.timestamp - a.timestamp),
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

    activitiesMemory.push(newActivity);

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

    activitiesMemory = activitiesMemory.filter((activity) => activity.id !== id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'エラーが発生しました' },
      { status: 500 }
    );
  }
}
