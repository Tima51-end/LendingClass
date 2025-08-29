import { useTranslation } from "../../context/LanguageContext";


const ProductSection = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t("designTitle"),
      description: t("designDesc"),
      image: "/images/class2.jpg", 
    },
    {
      title: t("usageTitle"),
      description: t("usageDesc"),
      image: "/images/class3.jpg",
    },
    {
      title: t("deliveryTitle"),
      description: t("deliveryDesc"),
      image: "/images/class4.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t("productTitle")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto"></div>
        </div>
        <div className="space-y-20">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                  {section.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {section.description}
                </p>
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="bg-gray-800 rounded-2xl p-4 shadow-xl">
                  <img
                    src={section.image} // Используем изображение напрямую
                    alt={section.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;