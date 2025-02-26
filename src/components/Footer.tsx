import Container from "./ui/Container";
import fonts from "@/config/fonts";
import Link from "next/link";
import { FaThreads, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-primaryBrown text-primaryBeige py-16">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Contact Section */}
        <div>
          <h3 className={`text-xl font-semibold mb-4 ${fonts.playfair}`}>
            Contact Us
          </h3>
          {/* <p className={`text-base ${fonts.mulish}`}>support@aakaura.in</p> */}
          <p className={`text-base ${fonts.mulish}`}>+91 8619029656</p>
          <p className={`text-base ${fonts.mulish}`}>Jaipur, Rajasthan</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className={`text-xl font-semibold mb-4 ${fonts.playfair}`}>
            Quick Links
          </h3>
          <ul className={`space-y-3 ${fonts.merriweather}`}>
            <li>
              <Link href="/" className="hover:text-primaryRed transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primaryRed transition">
                Know Us :)
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-primaryRed transition">
                Our Thoughts
              </Link>
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
              href="https://www.instagram.com/aakaura.in?igsh=ZjY3aTc0dzJ2czN6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryBeige hover:text-primaryRed transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.threads.net/@aakaura.in?invite=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryBeige hover:text-primaryRed transition"
            >
              <FaThreads size={24} />
            </a>
          </div>
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
