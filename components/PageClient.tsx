"use client";
import { useMemo } from "react";
import ChatWidget from "@/components/ChatWidget";

export default function PageClient() {
  const key = useMemo(() => String(Date.now()), []);
  return <ChatWidget key={key} />;
}

