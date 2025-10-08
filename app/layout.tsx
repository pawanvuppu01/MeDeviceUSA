import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import NextAuthSessionProvider from "./providers/SessionProvider";

export const metadata = {
  title: "Alovera Hospital",
  description: "Alovera Hospital Management System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <NextAuthSessionProvider>
          {/* ✅ Always render Navbar at top */}
          <Navbar />
          <main className="pt-20 min-h-screen">{children}</main>
          <Footer />
          <ChatWidget />
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
