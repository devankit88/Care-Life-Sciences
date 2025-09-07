import React from 'react';
import { Users, Target, Heart, Mail, Briefcase, Award, Crown as Growth } from 'lucide-react';

const Careers: React.FC = () => {
  const benefits = [
    {
      icon: <Growth className="h-8 w-8" />,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and career advancement paths.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaborative Environment',
      description: 'Work with a diverse team of experienced professionals.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Healthcare Impact',
      description: 'Make a meaningful difference in healthcare distribution.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Recognition',
      description: 'Performance-based recognition and reward systems.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We value ideas and give people the space to execute them. Join us in making a 
            meaningful impact in pharmaceutical distribution and healthcare.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At Care Life Sciences, we believe our people are our most valuable asset. 
              We create an environment where talent thrives and careers flourish.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Culture</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Care Life Sciences treats its human resource as its most valuable asset. We foster 
                    an environment of continuous learning, innovation, and growth where every team member 
                    can reach their full potential.
                  </p>
                  <p>
                    We are always looking for people with determination and a strong sense of commitment 
                    who share our vision of improving healthcare accessibility through quality pharmaceutical 
                    distribution.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-10 w-10 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-gray-600">
                  Building careers while building healthcare infrastructure that serves communities.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`${benefit.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Openings</h2>
          
          <div className="bg-white p-12 rounded-xl shadow-lg">
            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="h-10 w-10 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              No Active Openings at the Moment
            </h3>
            <p className="text-gray-600 mb-8">
              We are always growing and new opportunities arise regularly. Please check back later 
              or send us your resume to be considered for future positions.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Stay Connected</h4>
              <p className="text-gray-600 mb-4">
                Join our talent pool and be the first to know about new opportunities that match your skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Apply</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Send Your Resume</h3>
              <p className="text-gray-600 mb-6">
                Email your resume and cover letter to our HR department. We review all applications carefully.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Email Address:</p>
                <p className="font-semibold text-blue-600">info.carelifescience@gmail.com</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Look For</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="bg-green-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Strong determination and commitment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="bg-green-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Passion for healthcare and quality</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="bg-green-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Team collaboration skills</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="bg-green-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Willingness to learn and grow</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="mailto:info.carelifescience@gmail.com?subject=Career Opportunity Inquiry"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Submit Your Application</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;