"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Forgot Password
        </h1>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="w-full mb-3 px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
            >
              Send Reset Link
            </button>
          </form>
        ) : (
          <p className="text-green-600 text-center">
            ✅ If an account exists for {email}, a reset link has been sent.
          </p>
        )}

        <p className="text-center text-sm mt-4">
          Remembered your password?{" "}
          <Link href="/login" className="text-green-700 hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </section>
  );
}
