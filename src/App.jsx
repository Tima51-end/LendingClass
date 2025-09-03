// App.jsx
import { LanguageContext } from "./context/LanguageContext";
import { trackEvent } from "./utils/tracking";
import LanguageSwitcher from "./components/common/LanguageSwitcher";
import SEOHead from "./components/common/SEOHead";
import HeroSection from "./components/sections/HeroSection";
import VideoSection from "./components/sections/VideoSection";
import AdvantagesSection from "./components/sections/AdvantagesSection";
import ProductSection from "./components/sections/ProductSection";
import ReviewsSection from "./components/sections/ReviewsSection";
import CTASection from "./components/sections/CTASection";
import Footer from "./components/sections/Footer";
import { useEffect, useState } from "react";
import Header from "./components/sections/Header";
import EngravingSection from "./components/sections/EngravingSection";

const App = () => {
  const [language, setLanguage] = useState("de");

  useEffect(() => {
    trackEvent("PageView", {
      page_title: "CLAAS Landing Page",
      page_location: window.location.href,
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {/* было: bg-black text-white */}
      <div className="min-h-screen bg-amber-50 text-stone-800">
        <SEOHead />
        <Header />
        <LanguageSwitcher />
        <HeroSection />
        <VideoSection />
        <AdvantagesSection />
        <ProductSection />
        <ReviewsSection />
        <EngravingSection />
        <CTASection />
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
