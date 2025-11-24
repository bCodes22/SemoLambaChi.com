//footer
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';
import Crescent from '../Lambda/crescent.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img
                src={Crescent}
                alt="Crescent logo"
                className="h-8 w-8"
              />
              <div className="ml-3">
                <span className="text-xl font-light">Lambda Chi Alpha</span>
                <div className="text-gray-300">Delta-Phi Zeta Chapter</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Building brotherhood, leadership, and character at Southeast Missouri State University since 1991.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Brotherhood', path: '/brotherhood' },
                { name: 'Events', path: '/events' },
                { name: 'Alumni', path: '/alumni' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <p>Cape Girardeau, MO 63701</p>
              <p>Email: lambdachirushchair@gmail.com</p>
              <p>Phone: </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/semolambdachi", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/semolambdachi", label: "Instagram" },
                { icon: Mail, href: "mailto:lambdachirushchair@gmail.com", label: "Email" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Lambda Chi Alpha - Delta-Phi Zeta Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;