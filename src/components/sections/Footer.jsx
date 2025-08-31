// components/sections/Footer.jsx
import { useTranslation } from "../../context/LanguageContext";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-amber-50 py-12 border-t border-amber-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            {/* ЛОГОТИП вместо текста */}
            <img
              src="/images/boro.png"
              alt="BORO Logo"
              className="h-20 mb-0.5"
            />
            <p className="text-stone-500">{t("copyright")}</p>
          </div>
          <div className="flex space-x-8">
            <a
              href="#privacy"
              className="text-stone-500 hover:text-stone-800 transition-colors"
            >
              {t("privacy")}
            </a>
            <a
              href="#imprint"
              className="text-stone-500 hover:text-stone-800 transition-colors"
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
