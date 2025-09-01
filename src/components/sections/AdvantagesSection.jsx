// components/sections/AdvantagesSection.jsx
import { Heart, Zap, Settings, Gift, Truck, Check } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";

const AdvantagesSection = () => {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: <Heart className="w-7 h-7" />,
      title: t("handmade"),
      description: t("handmadeDesc"),
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: t("chargingStation"),
      description: t("chargingStationDesc"),
    },
    {
      icon: <Settings className="w-7 h-7" />,
      title: t("claasDesign"),
      description: t("claasDesignDesc"),
    },
    {
      icon: <Gift className="w-7 h-7" />,
      title: t("giftReady"),
      description: t("giftReadyDesc"),
    },
    {
      icon: <Truck className="w-7 h-7" />,
      title: t("shippingPoland"),
      description: t("shippingPolandDesc"),
    },
    {
      icon: <Check className="w-7 h-7" />,
      title: t("easyMaintenance"),
      description: t("easyMaintenanceDesc"),
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            {t("advantages")}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="group h-full">
              <div
                className="bg-white rounded-3xl p-8 h-full border border-slate-100 
                          hover:border-slate-200 transition-all duration-500 
                          hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 
                                flex items-center justify-center mb-6 group-hover:scale-110 
                                transition-transform duration-300"
                  >
                    <div className="text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300">
                      {advantage.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-medium text-slate-900 mb-4 leading-tight">
                    {advantage.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed font-light">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
