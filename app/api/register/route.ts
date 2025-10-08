import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { randomInt } from "crypto";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// ✉️ Configure email transport (Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, phone, password } = await req.json();

    if (!email && !phone) {
      return NextResponse.json({ error: "Email or phone number required" }, { status: 400 });
    }

    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ email }, { phone }] },
    });

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationCode = randomInt(100000, 999999).toString();

    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        verificationCode,
        isVerified: false,
      },
    });

    // ✉️ Send verification email
    if (email) {
      await transporter.sendMail({
        from: `"Alovera Hospital" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Verify Your Account - Alovera Hospital",
        text: `Hello ${name || ""},\n\nYour verification code is: ${verificationCode}\n\nEnter this code to activate your account.\n\n🌿 Alovera Hospital`,
      });
    }

    return NextResponse.json({
      message: "Account created. Verification code sent to your email.",
      userId: user.id,
    });
  } catch (error) {
    console.error("❌ Registration Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
