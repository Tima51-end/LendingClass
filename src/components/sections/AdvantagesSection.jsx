// components/sections/AdvantagesSection.jsx
import { Heart, Zap, Settings, Gift, Truck, Check } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";

const AdvantagesSection = () => {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: t("handmade"),
      description: t("handmadeDesc"),
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t("chargingStation"),
      description: t("chargingStationDesc"),
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: t("claasDesign"),
      description: t("claasDesignDesc"),
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: t("giftReady"),
      description: t("giftReadyDesc"),
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: t("shippingPoland"),
      description: t("shippingPolandDesc"),
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: t("easyMaintenance"),
      description: t("easyMaintenanceDesc"),
    },
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            {t("advantages")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400/70 to-emerald-400/70 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="group">
              <div
                className="bg-white/80 rounded-2xl p-8 h-full hover:bg-white 
                            transition-all duration-300 border border-amber-100 hover:border-amber-300/60
                            transform hover:scale-105 shadow-sm hover:shadow-md"
              >
                <div className="text-amber-500 mb-6 group-hover:text-emerald-600 transition-colors duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
