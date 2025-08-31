// components/sections/ReviewsSection.jsx
import { Star } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";

const ReviewsSection = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      name: "Hans M.",
      rating: 5,
      text: "Fantastisches Geschenk für meinen Sohn! Die Qualität ist hervorragend und das Design authentisch. Sehr empfehlenswert!",
      avatar: "/people/Hans.jpg",
    },
    {
      name: "Maria K.",
      rating: 5,
      text: "Wunderschöne Handarbeit! Der Spender ist ein echter Hingucker und funktioniert perfekt. Schnelle Lieferung aus Polen.",
      avatar: "/people/Maria.jpg",
    },
    {
      name: "Thomas B.",
      rating: 5,
      text: "Als Landwirt bin ich begeistert von der Detailtreue. Ein tolles Geschenk, das bei allen Gästen für Begeisterung sorgt!",
      avatar: "/people/Thomas.jpg",
    },
    {
      name: "Anna L.",
      rating: 5,
      text: "Perfekte Geschenkverpackung und sehr gute Qualität. Die digitale Anzeige ist ein schönes Extra. Absolut zufrieden!",
      avatar: "/people/Anna.jpg",
    },
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
            {t("reviewsTitle")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400/70 to-emerald-400/70 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/80 rounded-2xl p-8 border border-amber-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <h4 className="text-stone-900 font-semibold mr-3">
                      {review.name}
                    </h4>
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-stone-500 text-lg leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
