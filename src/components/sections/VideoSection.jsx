import { Play } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";

const VideoSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            {t("videoTitle1")}<span className="text-orange-500">{t("videoTitle2")}</span>{" "}
            {t("videoTitle3")}
          </h2>
          <div className="relative bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
              <div className="text-center">
                <Play className="w-20 h-20 text-orange-500 mx-auto mb-4" />
                <p className="text-gray-300 text-lg">
                  {t("demoVideo")}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Autoplay, Loop, ohne Ton
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
