import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  // No API keys used: just acknowledge receipt. In a real app you could integrate email service.
  console.log("[contact] message received:", body)
  return NextResponse.json({ ok: true })
}
