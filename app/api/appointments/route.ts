import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all appointments
export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany({
      include: { doctor: true, patient: true },
    });
    return NextResponse.json(appointments);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500 });
  }
}

// POST create new appointment
export async function POST(req: Request) {
  try {
    const { date, time, doctorId, patientId } = await req.json();

    if (!date || !time || !doctorId || !patientId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const appointment = await prisma.appointment.create({
      data: {
        date: new Date(date),
        time,
        doctorId: Number(doctorId),
        patientId: Number(patientId),
      },
    });

    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create appointment" }, { status: 500 });
  }
}
