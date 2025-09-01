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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 flex items-center">
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-6 md:py-12 lg:py-20 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-light text-slate-900 mb-8 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-medium">
                CLAAS
              </span>
              <br />
              <span className="text-emerald-500 font-light">
                {t("dispenser")}
              </span>
              <br />
              <span className="text-2xl lg:text-3xl text-slate-500 font-light">
                {t("byBoro")}
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-12 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
              {t("heroSubtitle")}
            </p>

            <button
              onClick={handleBuyClick}
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 
                       hover:from-emerald-600 hover:to-teal-700 text-white font-medium text-lg rounded-2xl 
                       transform hover:scale-105 transition-all duration-300 shadow-xl 
                       hover:shadow-emerald-500/25 cursor-pointer"
            >
              <Gift className="mr-3" size={20} />
              {t("buyOnEtsy")}
            </button>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-4xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-6 shadow-2xl border border-slate-100 group-hover:shadow-3xl transition-all duration-500">
                <img
                  src="/images/class1.jpg"
                  alt="CLAAS Getränkespender"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-xl font-medium shadow-lg text-sm">
                  {t("new")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
