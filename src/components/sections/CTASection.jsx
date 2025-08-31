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
    // фоновая картинка + блюр + молочный оверлей
    <section className="relative overflow-hidden py-20">
      {/* фон-картинка */}
      <img
        src="/images/class1.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 w-full h-full object-cover blur opacity-55"
      />
      {/* молочный полупрозрачный слой для читаемости текста */}
      <div aria-hidden="true" className="absolute inset-0 z-10 bg-white/30" />

      {/* контент поверх */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-xl text-stone-600 mb-12">{t("ctaSubtitle")}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform ${
                    selectedPortions === portions
                      ? "bg-gradient-to-r from-rose-300 to-rose-400 text-stone-900 shadow-md shadow-rose-300/40 scale-105"
                      : "bg-white/80 text-stone-600 hover:bg-gradient-to-r hover:from-amber-200 hover:to-amber-300 hover:text-stone-900 border border-amber-200 hover:scale-105"
                  } active:scale-95`}
                >
                  {portions} {t("portions4").split(" ")[1]}
                </div>
              </label>
            ))}
          </div>

          <button
            onClick={handleOrder}
            className="inline-flex items-center px-12 py-5 
             bg-gradient-to-r from-emerald-300 to-emerald-400 
             hover:from-emerald-400 hover:to-emerald-500 
             active:from-emerald-200 active:to-emerald-300
             text-white font-bold text-xl rounded-xl 
             transform transition-all duration-300 shadow-lg 
             hover:shadow-emerald-300/40 
             hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Gift className="mr-3" size={28} />
            {t("orderOnEtsy")}
          </button>

          <p className="text-stone-500 mt-6 text-sm">
            {t("PaymentAndDelivery")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
