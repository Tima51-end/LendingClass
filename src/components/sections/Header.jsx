import { useTranslation } from "../../context/LanguageContext";
import { Truck, BadgePercent } from "lucide-react";

const Header = () => {
  const { t } = useTranslation();

  const items = [
    {
      key: "free",
      icon: <Truck className="w-4 h-4 md:w-5 md:h-5 mr-2" />,
      text: t("promoFreeShipping"),
    },
    {
      key: "two",
      icon: <BadgePercent className="w-4 h-4 md:w-5 md:h-5 mr-2" />,
      text: t("promoTwoDiscount"),
    },
  ];

  return (
    <div className="sticky top-0 z-40 bg-green-50/90 backdrop-blur border-b border-green-100 text-stone-800">
      <style>{`
        @keyframes header-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .header-marquee { animation: none !important; transform: none !important; }
        }
      `}</style>

      <div className="relative overflow-hidden">
        <div
          className="header-marquee flex w-[200%]"
          style={{ animation: "header-marquee 22s linear infinite" }}
        >
          {[0, 1].map((seg) => (
            <div key={seg} className="flex-none w-1/2">
              <div className="flex items-center justify-center gap-8 md:gap-12 py-2 md:py-3">
                {items.map((it) => (
                  <div
                    key={`${it.key}-${seg}`}
                    className="flex items-center text-sm md:text-base"
                  >
                    {it.icon}
                    <span className="font-medium">{it.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
