import { useState } from 'react';
import BackgroundImage from '../Lambda/Background.jpg';
import PresidentImage from '../Lambda/Exec/President.jpg';
import TreasurerImage from '../Lambda/Exec/Treasurer.jpg';
import InternalVPImage from '../Lambda/Exec/Internal_VP.jpg';
import RushChairImage from '../Lambda/Exec/Rush_Chair.jpg';
import { Facebook, Instagram, Mail } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzdnbyjk';

const officers = [
  { name: 'Grant Hoffman', position: 'President', email: 'gchoffman2s@semo.edu', image: PresidentImage },
  { name: 'Zavior Mize', position: 'VP of Internal Affairs', email: 'ezmize1s@semo.edu', image: InternalVPImage },
  { name: 'Lucas Lenear', position: 'Treasurer', email: 'lwlenear1s@semo.edu', image: TreasurerImage },
  { name: 'Jacob Leonard', position: 'Rush Chair', email: 'jwleaonard2s@semo.edu', image: RushChairImage },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section with Background Image */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${BackgroundImage})`
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Get in touch with Lambda Chi Alpha at Southeast Missouri State University. 
            We're here to answer your questions and help you learn more about our brotherhood.
          </p>
        </div>
      </section>

      {/* Contact an Officer */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Contact an Officer</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Have a specific question? Reach out directly to one of our officers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {officers.map((officer) => (
              <div key={officer.email} className="text-center group">
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4 mx-auto w-40 h-40">
                  <img
                    src={officer.image}
                    alt={officer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{officer.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{officer.position}</p>
                <a
                  href={`mailto:${officer.email}`}
                  aria-label={`Email ${officer.name}`}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:text-white hover:bg-gray-900 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900 bg-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900 bg-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900 bg-transparent"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900 bg-transparent resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gray-900 text-white py-3 hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && (
                  <p className="text-green-600 text-sm">Thanks! Your message has been sent.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-sm">Something went wrong. Please try again or email us directly.</p>
                )}
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Southeast Missouri State University<br />
                    Cape Girardeau, MO 63701
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">lambdachirushchair@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">(314) 680-6470</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Fraternity and Sorority Life Office Hours</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Monday - Friday: 9:00 AM - 4:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Social Media</h3>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href="https://www.facebook.com/semolambdachi"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 rounded-full"
                    >
                      <Facebook className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href="https://www.instagram.com/semolambdachi"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 rounded-full"
                    >
                      <Instagram className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Interested in Joining?</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            If you're interested in learning more about Lambda Chi Alpha and potentially 
            joining our brotherhood, we'd love to hear from you. Reach out to us and 
            we'll be happy to answer any questions you may have.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We welcome men who are committed to excellence, leadership, and making 
            a positive impact in their community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;