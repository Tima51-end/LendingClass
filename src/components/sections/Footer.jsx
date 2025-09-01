// components/sections/Footer.jsx
import { useTranslation } from "../../context/LanguageContext";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-t from-slate-50 to-white py-16 border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
            <img
              src="/images/boro.png"
              alt="BORO Logo"
              className="h-16 mb-3 opacity-90"
            />
            <p className="text-slate-500 text-sm font-light">
              {t("copyright")}
            </p>
          </div>

          <div className="flex space-x-8">
            <a
              href="#privacy"
              className="text-slate-500 hover:text-slate-900 transition-colors duration-200 text-sm font-light"
            >
              {t("privacy")}
            </a>
            <a
              href="#imprint"
              className="text-slate-500 hover:text-slate-900 transition-colors duration-200 text-sm font-light"
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
