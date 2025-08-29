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
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center">
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgb(120, 119, 198, 0.3) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, rgb(255, 119, 48, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                CLAAS
              </span>
              <br />
              <span className="text-green-400">{t("dispenser")}</span>
              <br />
              <span className="text-2xl lg:text-3xl text-gray-300 font-normal">
                {t("byBoro")}
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              {t("heroSubtitle")}
            </p>
            <button
              onClick={handleBuyClick}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 
                       hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg rounded-xl 
                       transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25"
            >
              <Gift className="mr-2" size={24} />
              {t("buyOnEtsy")}
            </button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
              <img
                src="/images/class1.jpg"
                alt="CLAAS Getränkespender"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
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
