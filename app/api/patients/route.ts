import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all patients
export async function GET() {
  try {
    const patients = await prisma.patient.findMany({
      include: { doctor: true },
    });
    return NextResponse.json(patients);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch patients" }, { status: 500 });
  }
}

// POST create new patient
export async function POST(req: Request) {
  try {
    const { name, age, doctorId } = await req.json();

    if (!name || !age || !doctorId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const patient = await prisma.patient.create({
      data: { name, age: Number(age), doctorId: Number(doctorId) },
    });

    return NextResponse.json(patient, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create patient" }, { status: 500 });
  }
}
