// components/sections/HeroSection.jsx
import { Gift } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";
import { trackEvent } from "../../utils/tracking";

const HeroSection = () => {
  const { t } = useTranslation();

  const handleBuyClick = () => {
    trackEvent("Purchase", {
      content_name: "CLAAS Dispenser",
      content_category: "Product",
      value: 199,
      currency: "EUR",
    });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-rose-50/60 to-emerald-50 flex items-center">
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(254, 202, 87, 0.3) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, rgba(52, 211, 153, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                CLAAS
              </span>
              <br />
              <span className="text-emerald-500">{t("dispenser")}</span>
              <br />
              <span className="text-2xl lg:text-3xl text-stone-500 font-normal">
                {t("byBoro")}
              </span>
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-lg mx-auto lg:mx-0">
              {t("heroSubtitle")}
            </p>
            <button
              onClick={handleBuyClick}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 
                       hover:from-amber-500 hover:to-amber-600 text-white font-bold text-lg rounded-xl 
                       transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-amber-400/30 cursor-pointer"
            >
              <Gift className="mr-2" size={24} />
              {t("buyOnEtsy")}
            </button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-white to-amber-50 rounded-3xl p-8 shadow-2xl">
              <img
                src="/images/class1.jpg"
                alt="CLAAS Getränkespender"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute -top-4 -right-4 bg-emerald-400 text-white px-4 py-2 rounded-full font-bold shadow-md">
                {t("new")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
