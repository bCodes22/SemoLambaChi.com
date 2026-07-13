import HarryS from '../Lambda/HarryS.jpg';
import BackgroundImage from '../Lambda/Background.jpg';
import LifeBrotherImage from '../Lambda/Life_Brother.jpg';
import { Facebook } from 'lucide-react';

const Alumni = () => {
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
            Alumni Network
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Our brotherhood extends far beyond graduation. Stay connected with Lambda Chi Alpha 
            and continue to be part of our growing legacy.
          </p>
        </div>
      </section>

      {/* Alumni Impact */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">Lifelong Brotherhood</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our alumni network spans across industries and continents, creating opportunities 
                for mentorship, career advancement, and lifelong friendships.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From recent graduates to seasoned professionals, our alumni continue to embody 
                the values of Lambda Chi Alpha and support current members in their journey.
              </p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img
                  src={LifeBrotherImage}
                  alt="Alumni gathering"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Spotlights */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Alumni Spotlights</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Meet some of our distinguished alumni who continue to make their mark 
              in their respective fields.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Harry S. Truman",
                year: "1945",
                position: "33rd President of the United States",
                image: HarryS,
                quote: "Harry S. Truman was an honorary member of Lambda Chi Alpha, initiated in June 1945 by the Kansas City alumni association of the University of Missouri's chapter. At the time, he was the President of the United States"
              }
            ].map((alumni) => (
              <div key={alumni.name} className="text-center group">
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6 mx-auto w-64 h-64">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{alumni.name}</h3>
                <p className="text-gray-600 mb-2">{alumni.year}</p>
                <p className="text-gray-900 mb-4">{alumni.position}</p>
                <p className="text-gray-600 italic leading-relaxed">"{alumni.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Stay Connected</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              There are many ways to stay involved with our chapter and support current members.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">Ways to Connect</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-600">Join our Alumni Association</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-600">Attend Alumni Events</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-600">Mentor Current Members</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-600">Support Chapter Initiatives</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">Join Our Alumni Group</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Connect with fellow alumni, catch up on chapter news, and stay in the loop
                on upcoming events by joining our Facebook group.
              </p>
              <a
                href="https://www.facebook.com/groups/2487145961"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-gray-900 text-white py-3 hover:bg-gray-800 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
                Join the Facebook Group
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;