export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-center py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top: Contact / Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-sm">
          <div>
            <h4 className="font-semibold text-lg mb-2">MeDeviceUSA</h4>
            <p>
              Accelerating healthcare innovation through advanced medical device
              design, regulatory expertise, and clinical excellence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Contact</h4>
            <p>Denton, Texas, USA</p>
            <p>📞 +1 (940) 627-5153</p>
            <p>✉️ info@medeviceusa.com</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/training" className="hover:underline">
                  Training
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 my-4"></div>

        {/* Bottom copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} MeDeviceUSA. All rights reserved. | 
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
}
