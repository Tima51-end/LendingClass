import { useTranslation } from "../../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="fixed top-16 md:top-14 right-6 z-50">
      <div className="flex bg-white/90 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-slate-200/50">
        <button
          onClick={() => setLanguage("de")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
            language === "de"
              ? "bg-emerald-500 text-white shadow-md"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
          }`}
        >
          DE
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
            language === "en"
              ? "bg-emerald-500 text-white shadow-md"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
