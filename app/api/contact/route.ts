import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  console.log("📩 Contact form submission:", data);

  // You can later connect this to Nodemailer or Prisma here.
  return NextResponse.json({ message: "Form received" }, { status: 200 });
}
