import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../../context/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  { src: "/videos/classVideo.mp4" },
  { src: "/videos/classVideoUA.mp4" },
  { src: "/videos/classVideoTest.mp4" },
];

const VideoSection = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((v, i) => {
      if (!v) return;
      if (i !== current) {
        try {
          if (!v.paused) v.pause();
          if (!Number.isNaN(v.currentTime)) {
            const t = v.currentTime || 0;
            v.currentTime = Math.max(0, t - 0.000001);
          }
        } catch (err) {
          console.log(err);
        }
      }
    });
  }, [current]);

  const prev = () => setCurrent((i) => (i + videos.length - 1) % videos.length);
  const next = () => setCurrent((i) => (i + 1) % videos.length);

  return (
    <section className="py-6 md:py-12 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-medium">
              {t("videoTitle2")}
            </span>{" "}
            {t("videoTitle3")}
          </h2>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-4xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />

          <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 group-hover:shadow-2xl transition-all duration-500">
            <div className="relative aspect-[9/16] md:aspect-video overflow-hidden">
              {videos.map((v, i) => {
                const n = videos.length;
                const relRaw = (i - current + n) % n; // 0,1,2
                const rel = relRaw === 0 ? 0 : relRaw === n - 1 ? -1 : 1;

                const isCenter = rel === 0;
                const base =
                  "absolute inset-0 md:inset-y-0 md:left-1/2 md:-translate-x-1/2 transition-all duration-500 ease-out";

                const desktopPos =
                  rel === 0
                    ? "md: md:z-20 md:scale-100 md:opacity-100 md:blur-0"
                    : rel === -1
                    ? "md:translate-x-[-85%] md:z-10 md:scale-90 md:opacity-60 md:blur-[1.5px] md:hover:scale-95"
                    : "md:translate-x-[10%] md:z-10 md:scale-90 md:opacity-60 md:blur-[1.5px] md:hover:scale-95";

                const mobileVis = isCenter ? "block" : "hidden md:block";

                return (
                  <div
                    key={i}
                    className={`${base} ${desktopPos} ${mobileVis} flex items-center justify-center p-3 md:p-6`}
                    onClick={() => !isCenter && setCurrent(i)}
                    aria-hidden={isCenter ? false : true}
                    style={{ willChange: "transform, opacity, filter" }}
                  >
                    <video
                      ref={(el) => (refs.current[i] = el)}
                      src={v.src}
                      controls={isCenter}
                      muted={!isCenter}
                      playsInline
                      preload={isCenter ? "auto" : "metadata"}
                      className={`max-h-full max-w-full rounded-2xl shadow-lg bg-black ${
                        isCenter ? "" : "cursor-pointer"
                      }`}
                    />
                  </div>
                );
              })}
              <button
                onClick={prev}
                aria-label="Previous video"
                className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 h-[33vh] w-10 rounded-xl bg-white/45 hover:bg-white/70 active:scale-95 transition
                           backdrop-blur-sm flex items-center justify-center"
              >
                <ChevronLeft className="h-6 w-6 text-slate-700" />
              </button>
              <button
                onClick={next}
                aria-label="Next video"
                className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 h-[33vh] w-10 rounded-xl bg-white/45 hover:bg-white/70 active:scale-95 transition
                           backdrop-blur-sm flex items-center justify-center"
              >
                <ChevronRight className="h-6 w-6 text-slate-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
