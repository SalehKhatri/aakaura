import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import Container from "./ui/Container";
import fonts from "@/config/fonts";

export default function Footer() {
  return (
    <footer className="bg-primaryBrown text-primaryBeige py-16">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Contact Section */}
        <div>
          <h3 className={`text-xl font-semibold mb-4 ${fonts.playfair}`}>
            Contact Us
          </h3>
          <p className={`text-base ${fonts.mulish}`}>support@aakaura.com</p>
          <p className={`text-base ${fonts.mulish}`}>+1 234 567 890</p>
          <p className={`text-base ${fonts.mulish}`}>
            123 Spiritual St, Mystic City
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className={`text-xl font-semibold mb-4 ${fonts.playfair}`}>
            Quick Links
          </h3>
          <ul className={`space-y-3 ${fonts.merriweather}`}>
            <li>
              <a href="/about" className="hover:text-primaryRed transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-primaryRed transition">
                Shop
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-primaryRed transition">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-primaryRed transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className={`text-xl font-semibold mb-4 ${fonts.playfair}`}>
            Follow Us
          </h3>
          <div className="flex items-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryBeige hover:text-primaryRed transition"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryBeige hover:text-primaryRed transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryBeige hover:text-primaryRed transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="mailto:support@aakaura.com"
              className="text-primaryBeige hover:text-primaryRed transition"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className={`text-xl font-semibold mb-4 ${fonts.playfair}`}>
            Stay Updated
          </h3>
          <p className={`text-base mb-4 ${fonts.mulish}`}>
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primaryRed px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-primaryBeige/30 pt-6 text-center text-sm">
        <p className={`${fonts.specialElite}`}>
          &copy; {new Date().getFullYear()} Aakaura. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
