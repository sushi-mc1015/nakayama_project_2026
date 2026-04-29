import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json(
        { error: 'パスワードが必要です' },
        { status: 400 }
      );
    }

    const ACTIVITY_PASSWORD = process.env.ACTIVITY_PASSWORD || 'nakayama2026';

    if (password === ACTIVITY_PASSWORD) {
      return NextResponse.json(
        { message: '認証成功' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'パスワードが間違っています' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Password verification error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
