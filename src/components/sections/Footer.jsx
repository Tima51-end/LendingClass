import { useTranslation } from "../../context/LanguageContext";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-white mb-2">
              B<span className="text-orange-500">O</span>R
              <span className="text-green-500">O</span>
            </div>
            <p className="text-gray-400">{t("copyright")}</p>
          </div>
          <div className="flex space-x-8">
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t("privacy")}
            </a>
            <a
              href="#imprint"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t("imprint")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
