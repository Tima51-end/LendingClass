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
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t("advantages")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="group">
              <div
                className="bg-gray-900 rounded-2xl p-8 h-full hover:bg-gray-800 
                            transition-all duration-300 border border-gray-800 hover:border-orange-500/30
                            transform hover:scale-105"
              >
                <div className="text-orange-500 mb-6 group-hover:text-green-400 transition-colors duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
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
