"use client";
import React, { useState } from "react";

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I'm Alovera Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { from: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Something went wrong. Try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border rounded-lg shadow-lg w-80 p-4 flex flex-col z-50">
      {/* Chat window */}
      <div className="flex-1 overflow-y-auto mb-2 space-y-2 max-h-80">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg ${
              m.from === "bot"
                ? "bg-green-50 text-green-800 text-left"
                : "bg-gray-100 text-gray-800 text-right"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      {/* Input field */}
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Type message..."
          className="flex-1 border p-2 rounded-md text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-green-700 text-white px-4 rounded-md"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
