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
    <section className="relative lg:min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 lg:flex lg:items-center">
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
          <div className="lg:col-span-6 text-center lg:text-left hidden lg:block">
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
              <div className="absolute -inset-6 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-4xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl" />
              <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-100 group-hover:shadow-3xl transition-all duration-500">
                <img
                  src="/images/class1.jpg"
                  alt="CLAAS Getränkespender"
                  className="w-full h-auto rounded-2xl max-md:blur-sm md:blur-0"
                />

                <div
                  className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-teal-600
             text-white px-4 py-2 rounded-xl font-medium shadow-lg text-sm
             hidden md:block"
                >
                  {t("new")}
                </div>

                <div
                  className="lg:hidden absolute inset-x-0 top-20 sm:top-24 md:top-10 px-5 text-center"
                  style={{ top: "calc(env(safe-area-inset-top, 0px) + 5rem)" }}
                >
                  <h1 className="text-3xl font-semibold leading-tight text-white drop-shadow-md">
                    <span className="text-white/90">CLAAS</span>{" "}
                    <span className="text-emerald-200">{t("dispenser")}</span>
                  </h1>
                  <span className="mt-1 block text-sm text-white/80">
                    {t("byBoro")}
                  </span>
                </div>
              </div>
            </div>

            {/* Кнопка под фото (мобилка) */}
            <div className="lg:hidden mt-4 text-center">
              <button
                onClick={handleBuyClick}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 
                           hover:from-emerald-600 hover:to-teal-700 text-white font-medium text-base rounded-2xl 
                           transform hover:scale-105 transition-all duration-300 shadow-xl 
                           hover:shadow-emerald-500/25 cursor-pointer"
              >
                <Gift className="mr-2" size={18} />
                {t("buyOnEtsy")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
