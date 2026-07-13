//eventpage data
import { useState } from 'react';
import BackgroundImage from '../Lambda/Background.jpg';

// Add flyer images here once available, e.g.:
// import FallRushFlyer from '../Lambda/FallRushFlyer.jpg';
const flyers: { src: string; alt: string }[] = [];

const Events = () => {
  const [selectedFlyer, setSelectedFlyer] = useState<string | null>(null);

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
            Chapter Events
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Stay connected with our brotherhood through various events and activities 
            that strengthen our bonds and serve our community.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Upcoming Events</h2>
            <div className="bg-white p-16 border-l-4 border-gray-900">
              <p className="text-2xl text-gray-600">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Events;