import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            Your privacy is important to us. Learn how we protect and handle your information.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Overview */}
            <div className="bg-blue-50 p-8 rounded-xl mb-12">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Overview</h2>
              </div>
              <p className="text-gray-700 m-0">
                At Care Life Sciences, we respect your privacy and are committed to protecting your personal information. 
                This privacy policy explains how we collect, use, and safeguard information when you interact with our 
                website and services.
              </p>
            </div>

            {/* Information Collection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <p className="text-gray-700">
                    We collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="mt-3 text-gray-700 space-y-1">
                    <li>• Name and contact information (email, phone number, address)</li>
                    <li>• Business information and professional details</li>
                    <li>• Communication preferences</li>
                    <li>• Information provided through contact forms and inquiries</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                  <p className="text-gray-700">
                    When you visit our website, we may automatically collect certain information about your device and usage:
                  </p>
                  <ul className="mt-3 text-gray-700 space-y-1">
                    <li>• IP address and browser information</li>
                    <li>• Pages visited and time spent on our website</li>
                    <li>• Referring website information</li>
                    <li>• Device type and operating system</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• To respond to your inquiries and provide customer support</li>
                  <li>• To process orders and manage business relationships</li>
                  <li>• To improve our website and services</li>
                  <li>• To send relevant business communications and updates</li>
                  <li>• To comply with legal obligations and regulatory requirements</li>
                  <li>• To protect against fraudulent or unauthorized activities</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing and Disclosure</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">We Do Not Sell Your Information</h3>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information to third parties for marketing purposes.
                </p>
                <p className="text-gray-700">
                  We may share your information only in the following limited circumstances:
                </p>
                <ul className="mt-3 text-gray-700 space-y-1">
                  <li>• With your explicit consent</li>
                  <li>• To comply with legal obligations or court orders</li>
                  <li>• To protect our rights, property, or safety</li>
                  <li>• With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="bg-purple-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-full mr-4">
                    <Lock className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Data Security</h2>
                </div>
                <p className="text-gray-700">
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. However, please note 
                  that no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Access & Correction</h3>
                  <p className="text-gray-700">
                    You have the right to request access to and correction of your personal information we hold.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Portability</h3>
                  <p className="text-gray-700">
                    You can request a copy of your personal information in a commonly used format.
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Withdrawal of Consent</h3>
                  <p className="text-gray-700">
                    You can withdraw your consent for processing at any time where consent is the basis for processing.
                  </p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Deletion</h3>
                  <p className="text-gray-700">
                    You can request deletion of your personal information, subject to legal and business requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us About Privacy</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this privacy policy or how we handle your personal information, 
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
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;