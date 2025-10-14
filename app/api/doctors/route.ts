import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const doctors = await prisma.doctor.findMany();
  return NextResponse.json(doctors);
}

export async function POST(req: Request) {
  const body = await req.json();
  const doctor = await prisma.doctor.create({
    data: {
      name: body.name,
      specialty: body.specialty,
      phone: body.phone,
    },
  });
  return NextResponse.json(doctor);
}
