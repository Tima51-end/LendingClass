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
    <section className="py-20 bg-gradient-to-br from-gray-900 via-orange-900/20 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-xl text-gray-300 mb-12">{t("ctaSubtitle")}</p>
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
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    selectedPortions === portions
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                  }`}
                >
                  {portions} {t("portions4").split(" ")[1]}
                </div>
              </label>
            ))}
          </div>
          <button
            onClick={handleOrder}
            className="inline-flex items-center px-12 py-5 bg-gradient-to-r from-green-500 to-green-600 
                     hover:from-green-600 hover:to-green-700 text-white font-bold text-xl rounded-xl 
                     transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25"
          >
            <Gift className="mr-3" size={28} />
            {t("orderOnEtsy")}
          </button>
          <p className="text-gray-400 mt-6 text-sm">
            {t("PaymentAndDelivery")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
