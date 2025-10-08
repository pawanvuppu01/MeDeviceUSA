"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-16">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Alovera Hospital</h3>
          <p className="text-sm leading-6">
            Healing through nature — modern care powered by Ayurveda and technology.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/doctors">Doctors</Link></li>
            <li><Link href="/appointments">Appointments</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Departments</h3>
          <ul className="space-y-2 text-sm">
            <li>General Medicine</li>
            <li>Dermatology</li>
            <li>Physiotherapy</li>
            <li>Pediatrics</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm">📍 Denton, Texas, USA</p>
          <p className="text-sm">📞 +1 (940) 629-9145</p>
          <p className="text-sm">✉️ info@aloverahospital.com</p>
        </div>
      </div>

      <div className="bg-green-800 text-center text-xs py-3 border-t border-green-600">
        © {new Date().getFullYear()} Alovera Hospital. All rights reserved.
      </div>
    </footer>
  );
}
