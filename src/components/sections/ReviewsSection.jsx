import { Star } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";

const ReviewsSection = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      name: "Hans M.",
      rating: 5,
      text: "Fantastisches Geschenk für meinen Sohn! Die Qualität ist hervorragend und das Design authentisch. Sehr empfehlenswert!",
      avatar: "/api/placeholder/60/60",
    },
    {
      name: "Maria K.",
      rating: 5,
      text: "Wunderschöne Handarbeit! Der Spender ist ein echter Hingucker und funktioniert perfekt. Schnelle Lieferung aus Polen.",
      avatar: "/api/placeholder/60/60",
    },
    {
      name: "Thomas B.",
      rating: 5,
      text: "Als Landwirt bin ich begeistert von der Detailtreue. Ein tolles Geschenk, das bei allen Gästen für Begeisterung sorgt!",
      avatar: "/api/placeholder/60/60",
    },
    {
      name: "Anna L.",
      rating: 5,
      text: "Perfekte Geschenkverpackung und sehr gute Qualität. Die digitale Anzeige ist ein schönes Extra. Absolut zufrieden!",
      avatar: "/api/placeholder/60/60",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t("reviewsTitle")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <h4 className="text-white font-semibold mr-3">
                      {review.name}
                    </h4>
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-orange-500 text-orange-500"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
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
