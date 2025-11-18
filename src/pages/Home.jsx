import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import CategoriesGrid from '../components/Categories/CategoriesGrid';
import FeaturedProducts from '../components/Products/FeaturedProducts';
import SnacksDrinks from '../components/Products/SnacksDrinks';
import BeautyPersonalCare from '../components/Products/BeautyPersonalCare';
import HomeCareSection from '../components/HomeCare/HomeCareSection';
import CategoryShowcase from '../components/CategoryShowcase/CategoryShowcase';
import BrandShowcase from '../components/Brands/BrandShowcase';
import DealsSection from '../components/Deals/DealsSection';
import Footer from '../components/Footer/Footer';
import ComingSoonPopup from '../components/ComingSoon/ComingSoonPopup';
import ElectronicsSection from '../components/Electronics/ElectronicsSection';
import Contact  from '../components/contact/ContactSection';
import TermsPrivacySection from '../components/Terms&privacypolicy/TermsPrivacySection';

const Home = () => {
  const [showComingSoon, setShowComingSoon] = useState(true);

  return (
    <div className="min-h-screen bg-zenfoo-light w-full" style={{ margin: 16, padding: 24 }}>
      {/* Coming Soon Popup */}
      {showComingSoon && <ComingSoonPopup onClose={() => setShowComingSoon(false)} />}
      
      {/* Header Section */}
      <Header />
      
      
       <Hero />
      
      {/* Categories Grid with Horizontal Scroll */}
      <CategoriesGrid />
      
      {/* Interactive Category Showcase - NEW */}
      <CategoryShowcase />
      
      <ElectronicsSection />
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* Brand Showcase - NEW */}
      <BrandShowcase />
      
      {/* Snacks & Drinks Section */}
      <SnacksDrinks />
      
      {/* Beauty & Personal Care Section */}
      <BeautyPersonalCare />
      
      {/* PREMIUM Home Care Section */}
      <HomeCareSection />
      
      {/* Deals & Offers Section */}
      <DealsSection />
      <Contact />
      <TermsPrivacySection />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;