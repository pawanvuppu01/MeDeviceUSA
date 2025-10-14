"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const closeMenus = () => setOpenMenu(null);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white/80 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold text-blue-800 hover:text-blue-600">
          MeDeviceUSA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-700 relative">
          <NavLink href="/about" currentPath={pathname}>About</NavLink>

          {/* Services Dropdown */}
          <DropdownMenu
            title="Services"
            menuKey="services"
            openMenu={openMenu}
            handleToggle={handleToggle}
            closeMenus={closeMenus}
            links={[
              { name: "Design & Development", href: "/services/design-development" },
              { name: "Regulatory Affairs", href: "/services/regulatory-affairs" },
              { name: "Quality Assurance", href: "/services/quality-assurance" },
              { name: "Clinical Research", href: "/services/clinical-research" },
            ]}
          />

          {/* Solutions Dropdown */}
          <DropdownMenu
            title="Solutions"
            menuKey="solutions"
            openMenu={openMenu}
            handleToggle={handleToggle}
            closeMenus={closeMenus}
            links={[
              { name: "AI Diagnostics", href: "/integrated-solutions/ai-diagnostics" },
              { name: "Automation & Robotics", href: "/integrated-solutions/automation" },
              { name: "Custom Software", href: "/integrated-solutions/custom-software" },
            ]}
          />

          <NavLink href="/staffing" currentPath={pathname}>Staffing</NavLink>
          <NavLink href="/training" currentPath={pathname}>Training</NavLink>
          <NavLink href="/contact" currentPath={pathname}>Contact</NavLink>

          {/* Profile Dropdown */}
          <DropdownMenu
            title="Profile"
            icon={<User size={18} />}
            menuKey="profile"
            openMenu={openMenu}
            handleToggle={handleToggle}
            closeMenus={closeMenus}
            links={[
              { name: "Dashboard", href: "/dashboard" },
              { name: "Settings", href: "/profile/settings" },
              { name: "Logout", href: "/profile/logout", danger: true },
            ]}
          />

          <Link
            href="/login"
            className="ml-4 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => handleToggle("mobile")}
          className="md:hidden text-blue-800 text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {openMenu === "mobile" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t shadow-lg flex flex-col"
          >
            {[
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Solutions", href: "/integrated-solutions" },
              { name: "Staffing", href: "/staffing" },
              { name: "Training", href: "/training" },
              { name: "Contact", href: "/contact" },
              { name: "Profile", href: "/dashboard" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenus}
                className="px-6 py-3 border-b hover:bg-blue-50"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={closeMenus}
              className="px-6 py-3 bg-blue-700 text-white text-center font-semibold"
            >
              Login
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* === Active Page Highlight === */
function NavLink({ href, children, currentPath }: { href: string; children: React.ReactNode; currentPath: string }) {
  const isActive = currentPath.startsWith(href);
  return (
    <Link
      href={href}
      className={`transition relative hover:text-blue-700 ${
        isActive ? "text-blue-700 font-semibold" : "text-gray-700"
      }`}
    >
      {children}
      {isActive && (
        <motion.span
          layoutId="underline"
          className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-700 rounded"
        />
      )}
    </Link>
  );
}

/* === Dropdown Component === */
function DropdownMenu({
  title,
  icon,
  menuKey,
  openMenu,
  handleToggle,
  closeMenus,
  links,
}: {
  title: string;
  icon?: React.ReactNode;
  menuKey: string;
  openMenu: string | null;
  handleToggle: (menu: string) => void;
  closeMenus: () => void;
  links: { name: string; href: string; danger?: boolean }[];
}) {
  const isOpen = openMenu === menuKey;
  return (
    <div
      className="relative"
      onMouseEnter={() => handleToggle(menuKey)}
      onMouseLeave={closeMenus}
    >
      <button
        onClick={() => handleToggle(menuKey)}
        className="flex items-center gap-1 hover:text-blue-700 transition"
      >
        {icon}
        {title} <ChevronDown size={16} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-3 bg-white border rounded-lg shadow-lg w-56 py-2 z-50"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenus}
                className={`block px-4 py-2 hover:bg-blue-50 ${
                  link.danger ? "text-red-600" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
