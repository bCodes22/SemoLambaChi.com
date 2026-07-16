//eventpage data
import { useState } from 'react';
import BackgroundImage from '../Lambda/Background.jpg';
import eventsData from '../content/events.json';
import flyersData from '../content/flyers.json';

interface EventItem {
  title: string;
  date?: string;
  time?: string;
  location?: string;
  description?: string;
}

const events = eventsData.events as EventItem[];
const { flyers } = flyersData;

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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Upcoming Events</h2>
          </div>

          {events.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-8">
              {events.map((event) => (
                <div key={event.title} className="bg-white p-10 border-l-4 border-gray-900 text-center w-full max-w-3xl">
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">{event.title}</h3>
                  {(event.date || event.time) && (
                    <p className="text-gray-500 mb-1">
                      {event.date}
                      {event.date && event.time && ' • '}
                      {event.time}
                    </p>
                  )}
                  {event.location && <p className="text-gray-500 mb-4">{event.location}</p>}
                  {event.description && (
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <div className="bg-white p-16 border-l-4 border-gray-900">
                <p className="text-2xl text-gray-600">Coming Soon</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Event Flyers */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Event Flyers</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Check out flyers for our upcoming events. Click any flyer to view it full size.
            </p>
          </div>

          {flyers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {flyers.map((flyer) => (
                <button
                  key={flyer.src}
                  onClick={() => setSelectedFlyer(flyer.src)}
                  className="group block w-full max-w-sm mx-auto"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <img
                      src={flyer.src}
                      alt={flyer.alt}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium tracking-wide transition-opacity duration-300">
                        Click to Enlarge
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center max-w-2xl mx-auto">
              <div className="bg-gray-50 p-16 border-l-4 border-gray-900">
                <p className="text-2xl text-gray-600">Flyers Coming Soon</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Flyer Lightbox */}
      {selectedFlyer && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedFlyer(null)}
        >
          <button
            onClick={() => setSelectedFlyer(null)}
            aria-label="Close"
            className="absolute top-6 right-6 text-white text-4xl leading-none hover:text-gray-300 transition-colors"
          >
            &times;
          </button>
          <img
            src={selectedFlyer}
            alt="Enlarged flyer"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Events;