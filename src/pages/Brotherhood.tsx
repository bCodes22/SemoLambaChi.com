//Images
import MeansImage from '../Lambda/Means.jpg';
import CommunityServiceImage from '../Lambda/CommunityService.jpg';
import BrotherhoodEventImage from '../Lambda/Brotherhoodevent.jpg';
import BackgroundImage from '../Lambda/Background.jpg';
import brotherhoodSpotlightsData from '../content/brotherhoodSpotlights.json';

const { spotlights: brotherhoodSpotlights } = brotherhoodSpotlightsData;

//Brotherhood page
const Brotherhood = () => {
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
            Our Brotherhood
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Building lifelong bonds through shared experiences, mutual support, and 
            a commitment to personal growth and excellence.
          </p>
        </div>
      </section>

      {/* What Brotherhood Means */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">What Brotherhood Means</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Brotherhood in Lambda Chi Alpha extends far beyond college years. It's a lifelong 
                commitment to supporting one another through all of life's challenges and celebrations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our brothers come from diverse backgrounds, bringing unique perspectives and experiences 
                that enrich our community. Together, we create an environment where every member can 
                grow personally and professionally.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through shared values, meaningful traditions, and genuine friendships, we build 
                connections that last a lifetime.
              </p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img
                  src={MeansImage}
                  alt="Brotherhood gathering"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brotherhood Principles */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Brotherhood Principles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-6">Unity</h3>
              <p className="text-gray-600 leading-relaxed">
                Standing together as one, supporting each other through life's journey 
                and celebrating our collective achievements.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-6">Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Challenging ourselves and our brothers to reach our full potential 
                in academics, leadership, and personal development.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-6">Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Giving back to our community and making a positive impact through 
                volunteer work and philanthropic initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brother Spotlights */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Brotherhood Spotlights</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our brotherhood is made up of exceptional individuals who embody our values 
              and contribute to our chapter's success.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12">
            {brotherhoodSpotlights.map((brother, index) => (
              <div key={index} className="text-center group w-full max-w-xs">
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6 mx-auto w-64 h-64">
                  {brother.image ? (
                    <img
                      src={brother.image}
                      alt={brother.name || "Brother Spotlight"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">👥</div>
                        <p className="text-gray-600 font-medium">Brother Spotlight</p>
                        <p className="text-gray-500 text-sm">Coming Soon</p>
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{brother.name || "Brother Spotlight"}</h3>
                <p className="text-gray-600 mb-4">{brother.year || "Year"} - {brother.major || "Major"}</p>
                <p className="text-gray-600 italic leading-relaxed">"{brother.quote || "Stay tuned for inspiring stories from our brothers!"}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brotherhood Activities */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Brotherhood Activities</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6">
                <img
                  src={BrotherhoodEventImage}
                  alt="Brotherhood Events"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Brotherhood Events</h3>
              <p className="text-gray-600 leading-relaxed">
                From formal gatherings to casual hangouts, our brotherhood bonds grow stronger 
                through shared experiences and memorable moments that create lasting friendships.
              </p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6">
                <img
                  src={CommunityServiceImage}
                  alt="Community service"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Community Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Together we make a difference in our community through regular volunteer work 
                and charitable initiatives that reflect our commitment to service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brotherhood;