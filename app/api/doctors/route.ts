import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const doctors = await prisma.doctor.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(doctors);
  } catch (e) {
    console.error("GET /api/doctors error:", e);
    return NextResponse.json({ error: "Failed to fetch doctors" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, specialty } = await req.json();
    if (!name || !specialty) return NextResponse.json({ error: "name and specialty are required" }, { status: 400 });
    const doctor = await prisma.doctor.create({ data: { name, specialty } });
    return NextResponse.json(doctor, { status: 201 });
  } catch (e) {
    console.error("POST /api/doctors error:", e);
    return NextResponse.json({ error: "Failed to create doctor" }, { status: 500 });
  }
}
