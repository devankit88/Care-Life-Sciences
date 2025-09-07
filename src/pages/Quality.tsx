import React from 'react';
import { Shield, Award, CheckCircle, FileCheck, Star, Lock } from 'lucide-react';

const Quality: React.FC = () => {
  const certifications = [
    {
      title: 'GST Registration',
      number: '27AAMFC4645B1ZL',
      date: '30-08-2017',
      icon: <FileCheck className="h-8 w-8" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Drug License',
      number: '20B-MH-TZ5-211268',
      date: 'Valid License',
      icon: <Shield className="h-8 w-8" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Drug License (Additional)',
      number: '21B-MH-TZ5-211269',
      date: 'Valid License',
      icon: <Shield className="h-8 w-8" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'FSSAI Registration',
      number: '21521104000427',
      date: 'Active License',
      icon: <Award className="h-8 w-8" />,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const qualityPrinciples = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Operational Excellence',
      description: 'Implementing best practices to sustain a culture of operational excellence across all processes.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Stakeholder Satisfaction',
      description: 'Meeting and exceeding expectations of patients, customers, regulators, and all stakeholders.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'Regulatory Compliance',
      description: 'Maintaining strict adherence to all regulatory requirements and industry standards.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Quality Assurance</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our unwavering commitment to quality ensures that every product we distribute meets 
            the highest standards of safety, efficacy, and regulatory compliance.
          </p>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Quality</h2>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                We are committed to implementing best practices to sustain a culture of operational excellence, 
                meeting and exceeding the expectations of all stakeholders, including patients, customers, and regulators. 
                Quality is not just a department at Care Life Sciences – it's embedded in everything we do.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {qualityPrinciples.map((principle, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className={`${principle.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Licenses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Licenses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain all necessary certifications and licenses to ensure complete regulatory compliance 
              and build trust with our partners and customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`${cert.color} w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {cert.title}
                    </h3>
                    <div className="bg-gray-100 px-4 py-2 rounded-lg mb-3">
                      <p className="text-lg font-mono text-gray-800">
                        {cert.number}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality Standards We Follow</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Good Distribution Practices (GDP)</h3>
                    <p className="text-gray-600">Ensuring proper storage, handling, and distribution of pharmaceutical products.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cold Chain Management</h3>
                    <p className="text-gray-600">Maintaining temperature-controlled environments for sensitive pharmaceutical products.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Inventory Management</h3>
                    <p className="text-gray-600">Advanced systems for tracking expiry dates, batch numbers, and stock rotation.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation & Traceability</h3>
                    <p className="text-gray-600">Complete documentation for full traceability of all pharmaceutical products.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Compliant</h3>
                <p className="text-gray-600 mb-6">
                  All our operations are fully compliant with Indian pharmaceutical regulations 
                  and international quality standards.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-sm text-gray-600">
                    <strong>Last Regulatory Audit:</strong> Passed with Zero Findings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;