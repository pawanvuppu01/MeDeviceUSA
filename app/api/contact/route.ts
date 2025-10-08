import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const messages = await prisma.message.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(messages);
  } catch (e) {
    console.error("GET /api/contact error:", e);
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, content } = await req.json();
    if (!name || !email || !content) {
      return NextResponse.json({ error: "name, email, content are required" }, { status: 400 });
    }
    const msg = await prisma.message.create({ data: { name, email, content } });
    return NextResponse.json(msg, { status: 201 });
  } catch (e) {
    console.error("POST /api/contact error:", e);
    return NextResponse.json({ error: "Failed to create message" }, { status: 500 });
  }
}
