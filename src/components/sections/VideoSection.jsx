// components/sections/VideoSection.jsx
import { useTranslation } from "../../context/LanguageContext";

const VideoSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-8">
            {t("videoTitle1")}
            <span className="text-amber-500">{t("videoTitle2")}</span>{" "}
            {t("videoTitle3")}
          </h2>

          <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-amber-100">
            <div className="relative aspect-[9/16] md:aspect-video bg-gradient-to-br from-amber-100 to-emerald-50">
              <div className="absolute inset-0 hidden md:block -z-10 overflow-hidden">
                <video
                  src="/videos/classVideo.mp4"
                  aria-hidden="true"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover blur-2xl scale-110 opacity-40"
                />
                <div className="absolute inset-0 bg-white/30" />
              </div>

              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <video
                  src="/videos/classVideo.mp4"
                  controls
                  playsInline
                  className="h-full w-auto md:h-full md:w-auto rounded-xl shadow"
                />
              </div>
            </div>
          </div>

          <p className="text-stone-600 text-lg mt-4">{t("demoVideo")}</p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
