import { Sparkles, Type, PenTool, BadgeCheck } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";

const EngravingSection = () => {
  const { t } = useTranslation();
  const points = Array.isArray(t("engravingPoints")) ? t("engravingPoints") : [];

  return (
    <section className="py-10 md:py-14 lg:py-16 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* карточка с лёгким молочным фоном + тонкий бордер */}
        <div
          className="
            group relative overflow-hidden rounded-3xl
            bg-white/90 backdrop-blur-sm
            border border-slate-200/60
            shadow-sm
            transition-all duration-300 transform-gpu
            hover:scale-[1.01]
            hover:border-emerald-200/60
            will-change-transform
          "
          tabIndex={0}
        >
          {/* еле заметный зелёный ореол, появляется только на ховере */}
          <div
            className="
              pointer-events-none absolute -inset-10 rounded-[2rem]
              bg-gradient-to-br from-emerald-200/10 via-teal-200/10 to-emerald-200/10
              opacity-0  transition-opacity duration-300 blur-2xl
            "
          />

          <div className="relative p-6 md:p-10">
            <div className="flex flex-col gap-3">
              <span className="inline-flex items-center gap-2 self-start rounded-full bg-white/80 border border-slate-200 px-3 py-1 text-xs text-emerald-700">
                <Sparkles className="w-4 h-4" />
                {t("engravingBadge")}
              </span>

              <h3 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
                {t("engravingTitle")}
              </h3>
              <p className="text-slate-600">{t("engravingSubtitle")}</p>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {points.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  {i === 0 ? (
                    <Type className="mt-1 w-5 h-5 text-emerald-600" />
                  ) : i === 1 ? (
                    <PenTool className="mt-1 w-5 h-5 text-emerald-600" />
                  ) : (
                    <BadgeCheck className="mt-1 w-5 h-5 text-emerald-600" />
                  )}
                  <p className="text-slate-700">{p}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-slate-500">{t("engravingNote")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngravingSection;
