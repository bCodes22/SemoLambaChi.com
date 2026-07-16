import { Link } from 'react-router-dom';
import { ArrowRight, Instagram } from 'lucide-react';
import InstaPost1 from '../Lambda/Instapost.jpg';
import InstaPost2 from '../Lambda/Instapost2.jpg';
import InstaPost3 from '../Lambda/Instapost3.jpg';
import InstaPost4 from '../Lambda/Instapost.jpeg';
import HomeImage from '../Lambda/Home.jpeg';
import BackgroundImage from '../Lambda/Background.jpg';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Background Image */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${HomeImage})`
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight tracking-tight drop-shadow-lg">
            Lambda Chi Alpha
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light drop-shadow-md">
            Delta-Phi Chapter
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Southeast Missouri State University
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/about"
              className="group inline-flex items-center text-white hover:text-white/80 transition-colors duration-300 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20"
            >
              <span className="text-lg font-medium">Learn About Our Chapter</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSel_fQvmT8A62RD4st07P3xCs5uIlbVa0DIfk31xUDafk-AKQ/viewform?fbclid=PAQ0xDSwLWqrhleHRuA2FlbQIxMQABpypArEkRV2wTU9gPwnj-R4F0Wg0ySDJEcsLBxuNr-g04G0Wc8YiO7U9_prQA_aem_1Fhs5bhn4P2C0NyiXyjc7g&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center text-white hover:text-white/80 transition-colors duration-300 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20"
            >
              <span className="text-lg font-medium">Join Our Brotherhood</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 leading-tight">
            Building brotherhood, leadership, and character at Southeast Missouri State University since 1991
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We build personal development through academic excellence, meaningful relationships, 
            and service to our community. Our brotherhood is built on the values of loyalty, duty, 
            respect, service, honor, integrity, and personal courage.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-6">Brotherhood</h3>
              <p className="text-gray-600 leading-relaxed">
                Lifelong bonds built on shared values, mutual respect, and unwavering support 
                for one another through all of life's journeys.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-6">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Commitment to academic achievement, personal growth, and leadership development 
                that prepares our members for success.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-6">Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedication to making a positive impact in our community through volunteer work, 
                philanthropy, and meaningful contributions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img
                  src={BackgroundImage}
                  alt="Brotherhood gathering"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-light text-gray-900 mb-8">Our Community</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Lambda Chi Alpha, we believe that true brotherhood extends beyond our chapter walls. 
                We are committed to creating lasting relationships and making meaningful contributions 
                to the Southeast Missouri State University community.
              </p>
              <Link
                to="/brotherhood"
                className="group inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors duration-300"
              >
                <span className="font-medium">Meet Our Brothers</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Follow Our Journey</h2>
            <a
              href="https://www.instagram.com/semolambdachi"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5 mr-2" />
              <span className="font-medium">@semolambdachi</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: InstaPost1, alt: "Instagram Post 1" },
              { src: InstaPost2, alt: "Instagram Post 2" },
              { src: InstaPost3, alt: "Instagram Post 3" },
              { src: InstaPost4, alt: "Instagram Post 4" }
            ].map((post, index) => (
              <div key={index} className="h-64 sm:h-72 md:h-80 group">
                <a 
                  href="https://www.instagram.com/semolambdachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <div className="relative h-full overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <img
                      src={post.src}
                      alt={post.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
            Interested in joining our brotherhood?
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            We welcome men who are committed to excellence, leadership, and making a positive impact.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center bg-gray-900 text-white px-8 py-4 hover:bg-gray-800 transition-colors duration-300"
          >
            <span className="font-medium">Get in Touch</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;