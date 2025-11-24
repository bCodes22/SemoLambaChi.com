//eventpage data
import BackgroundImage from '../Lambda/Background.jpg';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Meet The Greeks",
      date: "8/16/2025",
      time: "6:30 PM",
      location: "Academic Terraces",
      description: "."
    },
    {
      id: 2,
      title: "Meet The Lambda Chis",
      date: "8/18/2025",
      time: "5:00 PM",
      location: "Chop",
      description: "."
    },
    {
      id: 3,
      title: "Rec Day",
      date: "8/29/2025",
      time: "5:00 PM",
      location: "Rec Center",
      description: "."
    },
    {
      id: 4,
      title: "Casino Night",
      date: "8/21/2025",
      time: "5:00 PM",
      location: "1150 New Madrid St.",
      description: "."
    },
    {
      id: 5,
      title: "Boys Night",
      date: "8/22/2025",
      time: "8:00 PM",
      location: "1150 New Madrid St.",
      description: "."
    },
    {
      id: 6,
      title: "Pickle Ball",
      date: "8/23/2025",
      time: "1:00 PM",
      location: "Pickle Ball Factory",
      description: "."
    },
    {
      id: 7,
      title: "Late Night BBQ",
      date: "8/27/2025",
      time: "9:00 PM",
      location: "1150 New Madrid St.",
      description: "."
    },
    {
      id: 8,
      title: "Invite Only Dinner",
      date: "8/28/2025",
      time: "",
      location: "",
      description: "."
    },
    {
      id: 9,
      title: "Bid Day",
      date: "8/29/2025",
      time: "",
      location: "",
      description: "."
    }
  ];

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
          
          <div className="space-y-12">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white p-8 border-l-4 border-gray-900">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium mb-1">Time</p>
                    <p className="text-gray-600">{event.time}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium mb-1">Location</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Events;