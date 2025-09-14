import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Truck, Award, Phone, MessageCircle, Plus, Heart, Pill, Activity } from 'lucide-react';

// Counter Animation Hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return { count, setIsVisible };
};

// Floating Icons Component
const FloatingIcons: React.FC = () => {
  const icons = [Plus, Heart, Pill, Activity, Shield, Users, Truck, Award, Plus];
  
  return (
    <div className="floating-icons">
      {icons.map((Icon, index) => (
        <Icon key={index} className="floating-icon w-8 h-8 text-white" />
      ))}
    </div>
  );
};

const Home: React.FC = () => {
  // Counters: updated to include Distributors, Retailers, Doctors
  const foundedCounter = useCounter(2017);
  const distributorsCounter = useCounter(10);
  const retailersCounter = useCounter(2000);
  const doctorsCounter = useCounter(1000);
  const complianceCounter = useCounter(100);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            foundedCounter.setIsVisible(true);
            distributorsCounter.setIsVisible(true);
            retailersCounter.setIsVisible(true);
            doctorsCounter.setIsVisible(true);
            complianceCounter.setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="parallax-bg text-white py-32 relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <FloatingIcons />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 parallax-content">
    <div className="text-center animate-fade-in">
  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
    Care Life Sciences
  </h1>

  <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
    Care Life Sciences is one of the fastest growing, leading young pharmaceutical companies. We are providing innovative health care products under the guidance of Mr. R. K. Pandey.
  </p>

  <p className="text-base md:text-lg mb-10 max-w-3xl mx-auto text-white/80 leading-relaxed">
    The major segments that we cater to are Gynaecology, Orthopedic, Respiratory, Dermatologist & Pediatric. We believe in an active and growing culture that has helped us put the company at such a high pedestal in a short amount of time. We retain a specialty marketing process in the Indian pharma industry through our structure of customer-dedicated marketing teams and comprehensive product portfolios.
  </p>

  <div className="flex flex-col sm:flex-row gap-6 justify-center">
    <Link
      to="/products"
      className="bg-gradient-to-r from-emerald-green to-light-blue text-white px-10 py-4 rounded-xl font-semibold btn-3d text-lg shadow-3d hover:shadow-3d-hover"
    >
      View Our Products
    </Link>
    <Link
      to="/contact"
      className="border-2 border-white/50 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-deep-blue transition-all duration-300 btn-3d text-lg"
    >
      Contact Us
    </Link>
  </div>
</div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are committed to providing exceptional pharmaceutical distribution services with integrity and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-white p-10 rounded-2xl card-3d group">
              <div className="bg-gradient-to-br from-deep-blue to-light-blue w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Verified Supplier
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Fully licensed with all necessary certifications including GST, Drug License, and FSSAI registration.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl card-3d group">
              <div className="bg-gradient-to-br from-emerald-green to-green-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Wide Product Range
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Comprehensive portfolio including Anti-allergic, Nutrition Supplements, Pain Management, and Antibiotics.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl card-3d group">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Reliable Distribution
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Timely and efficient distribution network ensuring your pharmaceutical needs are met promptly.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl card-3d group">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Customer-Centric
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Dedicated to providing personalized service and building long-term partnerships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section 
        id="stats-section"
        className="py-20 bg-gradient-to-r from-deep-blue via-light-blue to-emerald-green text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Using responsive grid; on larger screens show 5 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center relative z-10 items-center">
            <div className="group">
              <div className="counter text-white mb-4 text-3xl font-bold">{foundedCounter.count}</div>
              <div className="text-white/80 text-lg font-medium">Founded</div>
            </div>

            <div className="group">
              <div className="counter text-white mb-4 text-3xl font-bold">{distributorsCounter.count}+</div>
              <div className="text-white/80 text-lg font-medium">Distributors</div>
            </div>

            <div className="group">
              <div className="counter text-white mb-4 text-3xl font-bold">{retailersCounter.count}+</div>
              <div className="text-white/80 text-lg font-medium">Retailers</div>
            </div>

            <div className="group">
              <div className="counter text-white mb-4 text-3xl font-bold">{doctorsCounter.count}+</div>
              <div className="text-white/80 text-lg font-medium">Doctors</div>
            </div>

            <div className="group">
              <div className="counter text-white mb-4 text-3xl font-bold">{complianceCounter.count}%</div>
              <div className="text-white/80 text-lg font-medium">Licensed & Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section 
        className="py-24 text-white relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-green/90 to-deep-blue/90"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Need Pharmaceutical Products?
          </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
            Get in touch with our experienced team today for all your pharmaceutical distribution needs.
          </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+919004664055"
                className="bg-white text-deep-blue px-10 py-4 rounded-xl font-semibold btn-3d text-lg shadow-3d hover:shadow-3d-hover flex items-center justify-center space-x-3"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919004664055?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20pharmaceutical%20products."
              target="_blank"
              rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-emerald-green text-white px-10 py-4 rounded-xl font-semibold btn-3d text-lg shadow-3d hover:shadow-3d-hover flex items-center justify-center space-x-3"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


