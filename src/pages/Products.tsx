import React from 'react';
import { Pill, Heart, Shield, Zap, Plus, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Products: React.FC = () => {
  const productCategories = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Anti-allergic',
      description:
        'Comprehensive range of anti-allergic medications for various allergic conditions and reactions.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Nutrition Supplements',
      description:
        'High-quality nutrition supplements for all age groups, supporting overall health and wellness.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Pain Management',
      description:
        'Effective pain management solutions including analgesics and anti-inflammatory medications.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: <Pill className="h-8 w-8" />,
      title: 'Antibiotics',
      description:
        'Wide selection of antibiotics for treating bacterial infections and related conditions.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: <Plus className="h-8 w-8" />,
      title: 'Other Pharmaceutical Products',
      description:
        'Additional pharmaceutical products across various therapeutic categories and specializations.',
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  // Images from public folder
  const productImages = Array.from({ length: 20 }, (_, i) => `/${i + 1}.jpeg`);

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We offer a comprehensive portfolio of products across key therapeutic segments,
            ensuring quality and efficacy in every medication we distribute.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of pharmaceutical products designed to meet the healthcare needs
              of patients across all age groups and conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                <p className="text-gray-600 leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Product Showcase</h2>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            loop
            className="pb-12"
          >
            {productImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                  <img src={src} alt={`Product ${index + 1}`} className="w-full h-64 object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Product Catalog Coming Soon */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-12 rounded-xl">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Pill className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Detailed Product Catalog Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We are currently updating our comprehensive product catalog with detailed information,
              specifications, and availability. For immediate product inquiries and current inventory,
              please contact our team directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Request Product List</span>
              </Link>
              <a
                href="tel:+919004664055"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Call for Quotes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assured</h3>
              <p className="text-gray-600">
                All products are sourced from licensed manufacturers and undergo strict quality checks.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient Safety</h3>
              <p className="text-gray-600">
                We prioritize patient safety with proper storage, handling, and distribution practices.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pill className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wide Range</h3>
              <p className="text-gray-600">
                Comprehensive inventory covering multiple therapeutic areas and treatment options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
