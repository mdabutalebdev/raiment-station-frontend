import Link from 'next/link'
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Ratex BD
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Premium fashion essentials crafted for comfort and everyday confidence.
              Discover quality you can trust.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Shop
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition">T-Shirts</Link></li>
              <li><Link href="#" className="hover:text-white transition">Combos</Link></li>
              <li><Link href="#" className="hover:text-white transition">New Arrivals</Link></li>
              <li><Link href="#" className="hover:text-white transition">Best Sellers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Support
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition">Order Tracking</Link></li>
              <li><Link href="#" className="hover:text-white transition">Return Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-center gap-3">
                <FaPhoneAlt /> +880 1622243011
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope /> support@ratexbd.com
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt /> Dhaka, Bangladesh
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-gray-900 transition"
              >
                <FaFacebookF size={14} />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-gray-900 transition"
              >
                <FaInstagram size={14} />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-gray-900 transition"
              >
                <FaWhatsapp size={14} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} Ratex BD. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition">Terms</Link>
            <Link href="#" className="hover:text-white transition">Privacy</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
