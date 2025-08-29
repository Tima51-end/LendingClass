import React from "react";
import { useTranslation } from "../../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex bg-gray-800 rounded-lg p-1">
        <button
          onClick={() => setLanguage("de")}
          className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
            language === "de"
              ? "bg-orange-500 text-white"
              : "text-gray-300 hover:text-white"
          }`}
        >
          DE
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
            language === "en"
              ? "bg-orange-500 text-white"
              : "text-gray-300 hover:text-white"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
