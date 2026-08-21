import React, { useState, useEffect } from 'react';
import './App.css';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureStorytellingSection from './components/FeatureStorytellingSection';
import DeviceCatalogSection from './components/DeviceCatalogSection';
import HowItWorksSection from './components/HowItWorksSection';
import WorkflowArchitectureSection from './components/WorkflowArchitectureSection';
import PricingSection from './components/PricingSection';
import DemoShowcaseSection from './components/DemoShowcaseSection';
import SecurityTrustSection from './components/SecurityTrustSection';
import FAQSection from './components/FAQSection';
import TrialSignupSection from './components/TrialSignupSection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import DeviceCatalogPage from './pages/DeviceCatalogPage';

function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('home');

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#devices-catalog') {
        setCurrentScreen('devices');
      } else if (window.location.hash === '' || window.location.hash === '#home') {
        setCurrentScreen('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openDeviceScreen = () => {
    window.location.hash = '#devices-catalog';
    setCurrentScreen('devices');
  };

  const backToHome = () => {
    window.location.hash = '#home';
    setCurrentScreen('home');
  };

  if (currentScreen === 'devices') {
    return <DeviceCatalogPage onBackToHome={backToHome} />;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Sticky Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="grow">
        {/* 3. Hero Section */}
        <HeroSection onOpenDemoModal={() => setDemoModalOpen(true)} />

        {/* 5. 2x2 Feature Grid System Architecture */}
        <FeatureStorytellingSection />

        {/* 6. Hardware Device Integration Catalog (Triggers full screen DeviceCatalogPage) */}
        <DeviceCatalogSection onOpenDevicePage={openDeviceScreen} />

        {/* 7. 3-Step How It Works Workflow */}
        <HowItWorksSection />

        {/* 8. Dark Navy Automation Architecture Pipeline */}
        <WorkflowArchitectureSection />

        {/* 9. Minimal Enterprise Pricing */}
        <PricingSection />

        {/* 10. Interactive Tabbed Product Showcase */}
        <DemoShowcaseSection />

        {/* 11. Enterprise Security & Trust Grid */}
        <SecurityTrustSection />

        {/* 12. Frequently Asked Questions Accordion */}
        <FAQSection />

        {/* 13. Final Dark Navy Trial Signup CTA */}
        <TrialSignupSection />
      </main>

      {/* 14. Dark Navy Footer & WhatsApp Support Button */}
      <Footer />

      {/* Interactive Video Demo Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />

    </div>
  );
}

export default App;
