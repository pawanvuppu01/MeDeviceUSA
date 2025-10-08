"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-4 px-8">
        {/* ✅ Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-green-700 font-extrabold text-2xl tracking-tight">
            🌿 Alovera Hospital
          </span>
        </div>

        {/* ✅ Navigation */}
        <ul className="hidden md:flex space-x-8 text-gray-900 font-semibold text-[16px]">
          {/* Home */}
          <li>
            <Link href="/" className="hover:text-green-700">
              Home
            </Link>
          </li>

          {/* About */}
          <li>
            <Link href="/about" className="hover:text-green-700">
              About
            </Link>
          </li>

          {/* Consulting Services */}
          <li
            className="relative"
            onMouseEnter={() => toggleMenu("consulting")}
            onMouseLeave={() => toggleMenu("")}
          >
            <button className="flex items-center hover:text-green-700">
              Consulting Services <ChevronDown size={16} className="ml-1" />
            </button>

            {openMenu === "consulting" && (
              <ul className="absolute top-full left-0 bg-white border rounded-md shadow-md mt-2 w-64">
                <li>
                  <Link href="/consulting-services" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/consulting-services/design-controls" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    Design Controls
                  </Link>
                </li>
                <li>
                  <Link href="/consulting-services/regulatory-strategy" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    Regulatory Strategy
                  </Link>
                </li>
                <li>
                  <Link href="/consulting-services/quality-systems" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    Quality Systems
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Staffing & Recruiting */}
          <li
            className="relative"
            onMouseEnter={() => toggleMenu("staffing")}
            onMouseLeave={() => toggleMenu("")}
          >
            <button className="flex items-center hover:text-green-700">
              Staffing & Recruiting <ChevronDown size={16} className="ml-1" />
            </button>

            {openMenu === "staffing" && (
              <ul className="absolute top-full left-0 bg-white border rounded-md shadow-md mt-2 w-56">
                <li>
                  <Link href="/staffing-recruiting" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/staffing-recruiting/employers" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    Employers
                  </Link>
                </li>
                <li>
                  <Link href="/staffing-recruiting/candidates" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    Candidates
                  </Link>
                </li>
                <li>
                  <Link href="/staffing-recruiting/view-jobs" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    View Jobs
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Integrated Solutions */}
          <li
            className="relative"
            onMouseEnter={() => toggleMenu("integrated")}
            onMouseLeave={() => toggleMenu("")}
          >
            <button className="flex items-center hover:text-green-700">
              Integrated Solutions <ChevronDown size={16} className="ml-1" />
            </button>

            {openMenu === "integrated" && (
              <ul className="absolute top-full left-0 bg-white border rounded-md shadow-md mt-2 w-72">
                <li>
                  <Link href="/integrated-solutions" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/integrated-solutions/automation" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    Automation
                  </Link>
                </li>
                <li>
                  <Link href="/integrated-solutions/ai-diagnostics" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    AI Diagnostics
                  </Link>
                </li>
                <li>
                  <Link href="/integrated-solutions/custom-software" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    Custom Software
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Training */}
          <li
            className="relative"
            onMouseEnter={() => toggleMenu("training")}
            onMouseLeave={() => toggleMenu("")}
          >
            <button className="flex items-center hover:text-green-700">
              Training <ChevronDown size={16} className="ml-1" />
            </button>

            {openMenu === "training" && (
              <ul className="absolute top-full left-0 bg-white border rounded-md shadow-md mt-2 w-56">
                <li>
                  <Link href="/training" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/training/compliance" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/training/technical" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    Technical
                  </Link>
                </li>
                <li>
                  <Link href="/training/leadership" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    Leadership
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Resources */}
          <li
            className="relative"
            onMouseEnter={() => toggleMenu("resources")}
            onMouseLeave={() => toggleMenu("")}
          >
            <button className="flex items-center hover:text-green-700">
              Resources <ChevronDown size={16} className="ml-1" />
            </button>

            {openMenu === "resources" && (
              <ul className="absolute top-full left-0 bg-white border rounded-md shadow-md mt-2 w-60">
                <li>
                  <Link href="/resources" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/resources/blog" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/resources/case-studies" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/resources/whitepapers" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">
                    Whitepapers
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Contact */}
          <li>
            <Link href="/contact" className="hover:text-green-700">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
