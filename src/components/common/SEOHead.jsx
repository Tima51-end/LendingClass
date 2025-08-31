import { useEffect } from "react";
import { useTranslation } from "../../context/LanguageContext";

const SEOHead = () => {
  const { t, language } = useTranslation();

  useEffect(() => {
    document.title = t("CLAAS dispenser by Boro");
    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };
    const setProperty = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };
    setMeta("description", t("description"));
    setMeta(
      "keywords",
      "CLAAS, Getränkespender, Geschenk, Technik, Handwerk, BORO"
    );
    setProperty("og:title", t("title"));
    setProperty("og:description", t("description"));
    setProperty("og:type", "website");
    setProperty("og:locale", language === "de" ? "de_DE" : "en_US");
    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "CLAAS-Getränkespender von BORO",
      description: t("description"),
      brand: { "@type": "Brand", name: "BORO" },
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "199",
        availability: "https://schema.org/InStock",
      },
    };
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [t, language]);

  return null;
};

export default SEOHead;
