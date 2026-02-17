const partners = [
  {
    src: "https://coachandconnect.cc/wp-content/uploads/2024/07/cropped-cropped-cropped-LOGO-4.png",
    alt: "Partner 1",
  },
  { src: "https://sha.edu.eg/layout/images/logo.png", alt: "Partner 3" },
  {
    src: "https://www.ieee.org/themes/custom/ieee/pattern_lab/source/images/logos/logo-ieee-blue.svg",
    alt: "Partner 5",
  },
];

export default function Partners() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden bg-gray-50">
        <div className="flex items-center space-x-16 w-[200%] animate-infinite-scroll">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center p-4"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                width={160}
                height={80}
                className="object-contain drop-shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 12s linear infinite ;
        }
      `}</style>
    </section>
  );
}