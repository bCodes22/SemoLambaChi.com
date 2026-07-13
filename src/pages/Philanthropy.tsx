import BackgroundImage from '../Lambda/Background.jpg';
import SpringPhiloImage from '../Lambda/SpringPhilo.jpeg';
import InstapostImage from '../Lambda/Instapost.jpg';
import ChopsGivingImage from '../Lambda/ChopsGiving.jpg';
import WatermelonBustImage from '../Lambda/WaterMelon.jpg'; 
import WhyMattersLogo from '../Lambda/Why_Matters.png';
import { ExternalLink } from 'lucide-react';

const Philanthropy = () => {
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
            Philanthropy
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Making a meaningful difference in our community through dedicated service, 
            charitable giving, and volunteer work that reflects our values.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">Why it Matters</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Lambda Chi Alpha, we believe that true leadership means serving others. 
                Our philanthropic efforts are at the heart of who we are as a brotherhood, 
                reflecting our commitment to making a positive impact in our community.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through organized events, volunteer work, and charitable partnerships, 
                we strive to address real needs and create lasting change that extends 
                far beyond our chapter.
              </p>
            </div>
            <div className="group flex justify-center md:justify-end">
              <div className="w-full max-w-sm">
                <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300">
                  <img 
                    src={WhyMattersLogo} 
                    alt="Why it Matters logo" 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spring Philanthropy */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Spring Philanthropy</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our spring semester is filled with meaningful service opportunities and fundraising events 
              that bring our community together for important causes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="group">
              <a
                href="https://www.southeastarrow.com/news/lambda-chi-alpha-chapter-honors-brothers-memory-1843919"
                target="_blank"
                rel="noopener noreferrer"
                className="group/image block relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6 cursor-pointer"
              >
                <img
                  src={SpringPhiloImage}
                  alt="Scott Wood Classic Philanthropy Event"
                  className="w-full h-80 object-cover group-hover/image:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-opacity duration-300 group-hover/image:from-black/80"></div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 shadow-lg">
                  <span className="text-white text-sm font-medium tracking-wide whitespace-nowrap">
                    Read the story in The Southeast Arrow
                  </span>
                  <ExternalLink className="w-4 h-4 text-white/90 group-hover/image:translate-x-0.5 group-hover/image:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </a>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Scott Wood Classic</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
              The Scott Wood Classic is our annual spring philanthropy week dedicated to raising awareness and 
              support in the fight against cancer. This tradition honors 
              the memory of our brother, Scott T. Wood, who passed away from cancer on February 9, 2012, here at SEMO.
              </p>
              <p className="text-gray-600 leading-relaxed">
              Throughout the week, we focus on giving back to the community and spreading hope. 
              One way we do this is by inviting the SEMO community to write encouragement cards for individuals facing difficult times.
              These simple but heartfelt messages remind people that they are not alone and 
              reflect the compassion and unity that Scott’s legacy inspires.
              </p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 mb-6">
                <img
                  src={InstapostImage}
                  alt="St. Baldricks head shaving event"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">St. Baldricks</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
              As part of the Scott Wood Classic, the brothers of Lambda Chi Alpha continue a meaningful tradition by shaving their heads in Scott’s honor. 
              This act is both a symbol of solidarity and a way to raise funds for the fight against cancer.
              </p>
              <p className="text-gray-600 leading-relaxed">
              All funds raised through this event are donated to the St. Baldrick’s Foundation, an organization dedicated to supporting childhood cancer research.
              'We are thankful for the opportunity to keep this tradition alive, to honor Scott’s memory, and to contribute to a cause that makes a real difference. 
              Each year, we look forward to continuing this event and building on its impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fall Philanthropy */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Fall Philanthropy</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            The fall semester has always been a special time for our chapter to come together in service and giving. 
            From long-standing traditions that raised thousands of dollars for families in need, to our more recent focus on supporting men’s mental health, 
            our fall philanthropy reflects both our history and our growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="group">
              <a
                href="https://www.instagram.com/p/DORqu0xEkcw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="group/image block relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6 cursor-pointer"
              >
                <img
                  src={WatermelonBustImage}
                  alt="Watermelon Bust fundraising event"
                  className="w-full h-80 object-cover group-hover/image:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-opacity duration-300 group-hover/image:from-black/80"></div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 shadow-lg">
                  <span className="text-white text-sm font-medium tracking-wide whitespace-nowrap">
                    View recent photos on Instagram
                  </span>
                  <ExternalLink className="w-4 h-4 text-white/90 group-hover/image:translate-x-0.5 group-hover/image:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </a>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Watermelon Bust</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
              For many years, our chapter hosted the Watermelon Bust and Watermelon Bash as our main fall fundraising events. 
              These fun, community-centered traditions helped raise thousands of dollars for Feeding America, supporting families in need and helping fight hunger nationwide. 
              Through these events, we saw how brotherhood and campus spirit could come together to make a real impact.
              </p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 mb-6">
                <img
                  src={ChopsGivingImage}
                  alt="Chops Giving"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Chops Giving</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
              Each year, the brothers of Lambda Chi Alpha gather at Lambert’s Café for our annual ChopsGiving celebration, 
              a long-standing tradition filled with great food, fellowship, and the unmatched energy of brotherhood.
              </p>
              <p className="text-gray-600 leading-relaxed">
                ChopsGiving gives our chapter a chance to come together, reflect, and strengthen the bond that defines Lambda Chi Alpha. Whether it’s sharing stories, 
                laughing over plates of comfort food, or catching rolls across the table, this tradition reminds us of what it means to be part of something bigger than ourselves.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Philanthropy;