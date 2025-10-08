import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(appointments);
  } catch (e) {
    console.error("GET /api/appointments error:", e);
    return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { fullName, email, date, department, message, doctorId } = await req.json();
    if (!fullName || !email || !date || !department) {
      return NextResponse.json({ error: "fullName, email, date, department are required" }, { status: 400 });
    }
    const parsedDate = new Date(date);
    if (Number.isNaN(parsedDate.getTime())) return NextResponse.json({ error: "Invalid date" }, { status: 400 });

    const appt = await prisma.appointment.create({
      data: {
        fullName,
        email,
        date: parsedDate,
        department,
        message: message || null,
        doctorId: doctorId ? Number(doctorId) : null,
      },
    });
    return NextResponse.json(appt, { status: 201 });
  } catch (e) {
    console.error("POST /api/appointments error:", e);
    return NextResponse.json({ error: "Failed to create appointment" }, { status: 500 });
  }
}
