import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer({ theme, toggleTheme }) {
  return (
    <footer
      className={`py-10 px-20 ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-2xl mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-2xl mb-4">Courses</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Data Science
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Machine Learning
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cloud Computing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-2xl mb-4">Follow Us</h4>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-500">
                <FaFacebook size={24} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                <FaLinkedin size={24} />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-2xl mb-4">Review</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Customer Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Write a Review
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
