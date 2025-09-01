// components/sections/CTASection.jsx
import { useState } from "react";
import { Gift } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";
import { trackEvent } from "../../utils/tracking";
import { buildEtsyUrl } from "../../utils/urlBuilder";

const CTASection = () => {
  const { t } = useTranslation();
  const [selectedPortions, setSelectedPortions] = useState(4);

  const handleOrder = () => {
    trackEvent("InitiateCheckout", {
      content_name: `CLAAS Dispenser ${selectedPortions} portions`,
      value: 199,
      currency: "EUR",
      num_items: 1,
    });
    window.open(buildEtsyUrl(selectedPortions), "_blank");
  };

  return (
    <section className="relative overflow-hidden py-24">
      {/* фон-картинка */}
      <img
        src="/images/class1.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />

      {/* градиентный оверлей для читаемости */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-gradient-to-b from-white/95 via-white/90 to-white/95"
      />

      {/* контент поверх */}
      <div className="relative z-20 container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            {t("ctaTitle")}
          </h2>
          <p className="text-xl text-slate-600 mb-16 font-light max-w-2xl mx-auto leading-relaxed">
            {t("ctaSubtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {[4, 5, 6].map((portions) => (
              <label key={portions} className="cursor-pointer">
                <input
                  type="radio"
                  name="portions"
                  value={portions}
                  checked={selectedPortions === portions}
                  onChange={(e) => setSelectedPortions(Number(e.target.value))}
                  className="sr-only"
                />
                <div
                  className={`px-8 py-4 rounded-2xl font-medium transition-all duration-300 ${
                    selectedPortions === portions
                      ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 scale-105"
                      : "bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-white hover:text-slate-900 border border-slate-200 hover:border-slate-300 hover:scale-105 hover:shadow-md"
                  }`}
                >
                  {portions} {t("portions4").split(" ")[1]}
                </div>
              </label>
            ))}
          </div>

          <button
            onClick={handleOrder}
            className="inline-flex items-center px-12 py-5 
                     bg-gradient-to-r from-emerald-500 to-teal-600 
                     hover:from-emerald-600 hover:to-teal-700 
                     text-white font-medium text-xl rounded-2xl 
                     transform transition-all duration-300 shadow-xl 
                     hover:shadow-emerald-500/25 
                     hover:scale-105 active:scale-95 cursor-pointer
                     backdrop-blur-sm"
          >
            <Gift className="mr-3" size={24} />
            {t("orderOnEtsy")}
          </button>

          <p className="text-slate-500 mt-8 text-sm font-light">
            {t("PaymentAndDelivery")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
