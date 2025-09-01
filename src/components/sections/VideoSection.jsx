// components/sections/VideoSection.jsx
import { useTranslation } from "../../context/LanguageContext";

const VideoSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            {t("videoTitle1")}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-medium">
              {t("videoTitle2")}
            </span>{" "}
            {t("videoTitle3")}
          </h2>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-4xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>

          <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 group-hover:shadow-2xl transition-all duration-500">
            <div className="relative aspect-[9/16] md:aspect-video bg-gradient-to-br from-slate-50 to-emerald-50/30">
              {/* Фоновое видео для desktop */}
              <div className="absolute inset-0 hidden md:block overflow-hidden">
                <video
                  src="/videos/classVideo.mp4"
                  aria-hidden="true"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover blur-sm scale-105 opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/60" />
              </div>

              {/* Основное видео */}
              <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
                <video
                  src="/videos/classVideo.mp4"
                  controls
                  playsInline
                  className="max-h-full max-w-full rounded-2xl shadow-lg bg-black"
                />
              </div>
            </div>
          </div>

          <p className="text-center text-slate-500 text-lg mt-8 font-light">
            {t("demoVideo")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
