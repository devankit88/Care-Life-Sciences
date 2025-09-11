import React from 'react';
import { Target, Eye, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Care Life Sciences</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Leading the way in pharmaceutical distribution with commitment, quality, and excellence since 2017.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Care Life Sciences, founded in 2017 by Mr. R.K Pandey, is a leading young pharmaceutical 
                  wholesaler and distributor headquartered in the Mumbai/Kalyan region. We are powered by 
                  a team with diverse experience and a passion for delivering excellence in healthcare distribution.
                </p>
                <p>
                  We are a well-integrated partner where sustained value is created, facilitating the promotion 
                  of health and wellness across our network. Our commitment to quality and service has made us 
                  a trusted name in the pharmaceutical distribution industry.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Excellence</h3>
                  <p className="text-sm text-gray-600">In every aspect of our service</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Partnership</h3>
                  <p className="text-sm text-gray-600">Building lasting relationships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to become the most valued pharma partner by continuously supplying a wide range 
                of pharmaceutical products that comply with the highest regulatory standards. We strive to ensure 
                that quality healthcare reaches every corner of our community.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Eye className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be a profitable provider of high-quality pharmaceutical products and solutions that create 
                strategic value for our customers and provide a rewarding workplace for our employees. We envision 
                a healthier future through reliable pharmaceutical distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Culture */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team & Culture</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe our people are our greatest asset and the foundation of our success.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Care Life Sciences treats its human resource as its most valuable asset. We foster an 
                    environment of continuous learning, innovation, and growth where every team member 
                    can reach their full potential.
                  </p>
                  <p>
                    We are always looking for people with determination and a strong sense of commitment 
                    who share our vision of improving healthcare accessibility through quality pharmaceutical 
                    distribution.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg text-center shadow-md">
                  <div className="text-2xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div className="bg-white p-6 rounded-lg text-center shadow-md">
                  <div className="text-2xl font-bold text-green-600 mb-2">7+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mr. R.K Pandey</h3>
              <p className="text-blue-600 mb-4">Founder</p>
              <p className="text-gray-600">
                Visionary leader who established Care Life Sciences with a mission to transform 
                pharmaceutical distribution in the region.
              </p>
            </div>
            {/* <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vikash Tiwari</h3>
              <p className="text-green-600 mb-4">Owner</p>
              <p className="text-gray-600">
                Operational leader ensuring day-to-day excellence and driving the company's 
                growth and customer satisfaction initiatives.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;