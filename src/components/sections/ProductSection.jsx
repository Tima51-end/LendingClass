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
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            {t("productTitle")}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto" />
        </div>

        <div className="space-y-32">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-12 gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? "lg:col-start-8" : ""
                }`}
              >
                <h3 className="text-3xl lg:text-4xl font-light text-slate-900 leading-tight mb-8">
                  {section.title}
                </h3>

                {/* Обычное описание для всех, кроме первого */}
                {index !== 0 && (
                  <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                    {section.description}
                  </p>
                )}

                {/* 1-е фото — икон-список из description + designExtra */}
                {index === 0 && (
                  <ul className="space-y-6">
                    {[section.description, t("designExtra")]
                      .filter(Boolean)
                      .map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="text-slate-700 text-lg leading-relaxed font-light">
                            {item}
                          </span>
                        </li>
                      ))}
                  </ul>
                )}

                {/* 2-е фото — список «Идеально подходит…» */}
                {index === 1 && Array.isArray(t("usageList")) && (
                  <>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                      {section.description}
                    </p>
                    <ul className="space-y-4">
                      {t("usageList").map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="text-slate-700 font-light">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* 3-е фото — особенности */}
                {index === 2 && Array.isArray(t("featuresList")) && (
                  <>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                      {section.description}
                    </p>
                    <ul className="grid sm:grid-cols-1 gap-4">
                      {t("featuresList").map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="text-slate-700 font-light">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <div
                className={`lg:col-span-6 ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <Reveal delay={index * 120}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                    <div className="relative bg-white rounded-2xl p-2 shadow-lg border border-slate-100 group-hover:shadow-xl transition-all duration-500">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
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
