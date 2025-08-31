// components/common/LanguageSwitcher.jsx
import { useTranslation } from "../../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex bg-white/70 rounded-lg p-1 shadow-sm">
        <button
          onClick={() => setLanguage("de")}
          className={`px-3 py-1 text-sm font-medium rounded transition-all cursor-pointer ${
            language === "de"
              ? "bg-amber-300/90 text-stone-900 ring-2 ring-amber-400/70"
              : "text-stone-500 hover:text-stone-800 hover:ring-1 hover:ring-amber-200"
          }`}
        >
          DE
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 text-sm font-medium rounded transition-all cursor-pointer ${
            language === "en"
              ? "bg-amber-300/90 text-stone-900 ring-2 ring-amber-400/70"
              : "text-stone-500 hover:text-stone-800 hover:ring-1 hover:ring-amber-200"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
