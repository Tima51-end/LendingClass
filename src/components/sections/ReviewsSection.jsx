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
    <section className="py-6 md:py-14 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            {t("reviewsTitle")}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-slate-100 
                        hover:border-slate-200 hover:shadow-lg transition-all duration-500 
                        hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-teal-50/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="relative">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-slate-100"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-slate-900 font-medium text-lg">
                        {review.name}
                      </h4>
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-emerald-400 text-emerald-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <blockquote className="text-slate-600 text-lg leading-relaxed font-light italic">
                  "{review.text}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
