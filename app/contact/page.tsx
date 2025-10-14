"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // This will eventually post to your API route
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setStatus("✅ Message sent successfully!");
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Please try again.");
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-blue-100 text-lg">
          Have questions or want to collaborate? Our team is here to support your healthcare innovation journey.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Info */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Fill out the form, and one of our specialists will reach out to you shortly.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Email:</strong> info@medeviceusa.com
            </li>
            <li>
              <strong>Phone:</strong> +1 (555) 234-6789
            </li>
            <li>
              <strong>Address:</strong> 250 Medical Drive, Denton, TX 76201, USA
            </li>
          </ul>

          <div className="mt-8">
            <iframe
              className="w-full h-64 rounded-lg border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.903550569436!2d-97.132775!3d33.214843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2a7135d8b4ab%3A0x4b845e1c2d0f9d6f!2sUniversity%20of%20North%20Texas!5e0!3m2!1sen!2sus!4v1689631347484!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition"
          >
            Send Message
          </button>

          {status && <p className="text-center text-sm text-blue-700 mt-4">{status}</p>}
        </form>
      </section>
    </main>
  );
}
