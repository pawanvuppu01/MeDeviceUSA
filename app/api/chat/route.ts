import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { message } = await req.json();

  // Simple bot response
  const reply = `You said: ${message}. Thank you for contacting Alovera Hospital 🌿`;

  // Optional: log the message in DB
  await prisma.message.create({
    data: {
      name: "Chat User",
      email: "chat@alovera.local",
      content: message,
    },
  });

  return Response.json({ reply });
}
