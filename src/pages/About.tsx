import BackgroundImage from '../Lambda/Background.jpg';
import LXACOA from '../Lambda/LXACOA.svg';
import HistoryImage from '../Lambda/History.jpeg';
import { executiveBoard } from '../Lambda/Exec';

const About = () => {
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
            About Our Chapter
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            The Delta-Phi Zeta Chapter of Lambda Chi Alpha has been fostering brotherhood, 
            leadership, and academic excellence at Southeast Missouri State University since 1991.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Lambda Chi Alpha exists to create and maintain among its members friendship, 
                sound learning, and the nuturing of rectitude, dignity, patriotism, and respect 
                for law as the foundation of the Fraternity.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We inspire and equip men to lead an ethical life of growth, service and leadership
                </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are also committed to developing men of character who will contribute positively 
                to their communities and professions throughout their lives.
              </p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 bg-white p-4">
                <img
                  src={LXACOA}
                  alt="Chapter mission"
                  className="mx-auto w-64 h-64 md:w-80 md:h-80 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Our Values</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {["Loyalty", "Duty", "Respect", "Service & Stewardship", "Honor", "Integrity", "Personal Courage"].map((value) => (
              <div key={value} className="text-center">
                <h3 className="text-xl font-medium text-gray-900">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img
                  src={HistoryImage}
                  alt="Chapter history"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">Our History</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 1991, the Delta-Phi Zeta Chapter has been a cornerstone of Greek life 
                at Southeast Missouri State University for over three decades. Our chapter has 
                consistently been recognized for excellence in academics, philanthropy, and 
                campus involvement and also setting records.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through the years, we have maintained our commitment to developing men of character 
                who make lasting contributions to their communities and professions. Our rich history 
                continues to inspire new generations of Lambda Chi Alpha brothers nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Chapter Leadership</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our executive board is composed of dedicated brothers committed to advancing 
              our chapter's mission and supporting our membership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {executiveBoard.map((leader) => (
              <div key={leader.position} className="text-center group">
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6 mx-auto w-48 h-48">
                  {leader.image ? (
                    <>
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">👤</div>
                        <p className="text-gray-600 text-sm font-medium">Photo Coming Soon</p>
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-gray-600">{leader.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;