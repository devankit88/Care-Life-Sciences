import React from 'react';
import { AlertTriangle, Shield, Info } from 'lucide-react';

const Disclaimer: React.FC = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Disclaimer</h1>
          <p className="text-xl text-orange-100">
            Important information about the use of our website and services.
          </p>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* General Disclaimer */}
          <div className="bg-orange-50 border-l-4 border-orange-400 p-8 rounded-r-xl mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-2 rounded-full mr-4">
                <Info className="h-6 w-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">General Disclaimer</h2>
            </div>
            <p className="text-gray-700 text-lg">
              The information provided on this website is for informational purposes only and should not be considered 
              as medical advice, diagnosis, or treatment recommendations. Always consult with qualified healthcare 
              professionals before making any healthcare decisions.
            </p>
          </div>

          {/* Medical Advice Disclaimer */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical Advice Disclaimer</h2>
            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                Important Notice
              </h3>
              <p className="text-gray-700 mb-4">
                Care Life Sciences does not provide medical advice. All product information on this website 
                is for informational purposes only and should not replace professional medical consultation.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Always consult a qualified healthcare professional before using any medication</li>
                <li>• Never start, stop, or change medication without medical supervision</li>
                <li>• Seek immediate medical attention for serious health concerns</li>
                <li>• This website does not diagnose, treat, cure, or prevent any disease</li>
              </ul>
            </div>
          </div>

          {/* Product Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Distributor Role</h3>
                <p className="text-gray-700">
                  Care Life Sciences operates as a pharmaceutical wholesaler and distributor. We do not manufacture 
                  the products we distribute and are not responsible for their formulation or efficacy.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Accuracy</h3>
                <p className="text-gray-700">
                  While we strive to provide accurate product information, specifications may change. Always refer 
                  to the product packaging and manufacturer's information for the most current details.
                </p>
              </div>
            </div>
          </div>

          {/* Liability Limitations */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                To the fullest extent permitted by law, Care Life Sciences disclaims all warranties and 
                shall not be liable for any damages arising from:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Use of information provided on this website</li>
                <li>• Errors or omissions in website content</li>
                <li>• Technical issues or website downtime</li>
                <li>• Third-party content or links</li>
                <li>• Any decisions made based on website information</li>
              </ul>
            </div>
          </div>

          {/* Regulatory Compliance */}
          <div className="mb-12">
            <div className="bg-purple-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Regulatory Compliance</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Care Life Sciences operates in compliance with Indian pharmaceutical regulations and maintains 
                all required licenses and certifications for pharmaceutical distribution.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600 mb-1">GST Registration</p>
                  <p className="font-semibold text-gray-900">27AAMFC4645B1ZL</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600 mb-1">Drug License</p>
                  <p className="font-semibold text-gray-900">20B-MH-TZ5-211268</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600 mb-1">FSSAI Registration</p>
                  <p className="font-semibold text-gray-900">21521104000427</p>
                </div>
              </div>
            </div>
          </div>

          {/* Website Usage */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Website Usage Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                By using this website, you acknowledge and agree to the following terms:
              </p>
              <ul className="space-y-2">
                <li>• You will use this website for lawful purposes only</li>
                <li>• You understand that information may not be complete or up-to-date</li>
                <li>• You will not misuse or attempt to harm our website or systems</li>
                <li>• You accept that we may modify or discontinue services at any time</li>
                <li>• You agree to these terms and any applicable laws and regulations</li>
              </ul>
            </div>
          </div>

          {/* Contact for Questions */}
          <div className="bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About This Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this disclaimer or need clarification about any aspect of our services, 
              please contact us:
            </p>
            <div className="text-gray-700">
              <p><strong>Email:</strong> info.carelifescience@gmail.com</p>
              <p><strong>Phone:</strong> +91 9004664055</p>
              <p><strong>Address:</strong> Sai Anandi Heights, Office No. 3, Katemanewali, Kalyan East, Thane, Maharashtra - 421306</p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              <strong>Last Updated:</strong> January 2024
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;