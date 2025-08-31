// components/sections/ProductSection.jsx
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../../context/LanguageContext";
import { CheckCircle2 } from "lucide-react";

// Простая обёртка для появления при скролле
const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const tid = setTimeout(() => setVisible(true), delay);
            io.unobserve(el);
            return () => clearTimeout(tid);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
};

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
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
            {t("productTitle")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400/70 to-amber-400/70 mx-auto" />
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
                {/* Заголовок без подчеркиваний */}
                <h3 className="text-2xl lg:text-3xl font-bold text-stone-800 leading-snug">
                  {section.title}
                </h3>

                {/* Обычное описание для всех, кроме первого (там заменим на икон-список) */}
                {index !== 0 && (
                  <p className="mt-3 text-stone-600 text-lg leading-relaxed">
                    {section.description}
                  </p>
                )}

                {/* 1-е фото — икон-список из description + designExtra */}
                {index === 0 && (
                  <ul className="mt-4 space-y-3">
                    {[section.description, t("designExtra")]
                      .filter(Boolean)
                      .map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 flex-none mt-0.5 text-emerald-500" />
                          <span className="text-stone-700 text-lg leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                  </ul>
                )}

                {/* 2-е фото — список «Идеально подходит…» */}
                {index === 1 && Array.isArray(t("usageList")) && (
                  <>
                    <p className="mt-3 text-stone-600 text-lg leading-relaxed">
                      {section.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {t("usageList").map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 flex-none mt-0.5 text-emerald-500" />
                          <span className="text-stone-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* 3-е фото — особенности (строго одинаковые иконки, сетка на sm+) */}
                {index === 2 && Array.isArray(t("featuresList")) && (
                  <>
                    <p className="mt-3 text-stone-600 text-lg leading-relaxed">
                      {section.description}
                    </p>
                    <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {t("featuresList").map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 flex-none mt-0.5 text-emerald-500" />
                          <span className="text-stone-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <Reveal delay={index * 120}>
                  <div className="bg-white/80 rounded-2xl p-4 shadow-lg border border-amber-100">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover rounded-xl shadow"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
