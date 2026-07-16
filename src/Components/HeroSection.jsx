import Cards from "./Cards";
import Seo from "./Seo";
import aitools from "../assets/images/aitools.png";
import codingimg from "../assets/images/coding.png";

const cardData = [
  {
    srcimg: codingimg,
    name: "Coding",
    path: "/coding-articles",
    detailsProd:
      "Explore beginner-friendly coding tutorials, programming basics, machine language, and practical examples.",
  },
  {
    srcimg: aitools,
    name: "AI Tools",
    path: "/aitools",
    detailsProd:
      "Discover practical AI tools for students, developers, and creators in one easy guide.",
  },
];

const HeroSection = () => {
  return (
    <>
      <Seo
        title="NaukriQ | Learn Coding, AI Tools and Digital Skills"
        description="NaukriQ helps students and beginners learn coding, AI tools, and digital skills through simple, practical guides."
        keywords="coding tutorials, AI tools, learning website, programming basics, beginner guide"
        canonical="https://naukriq.me/"
        ogTitle="NaukriQ | Learn Coding, AI Tools and Digital Skills"
        ogDescription="Learn coding, AI tools, and digital skills with easy guides from NaukriQ."
        ogImage="https://naukriq.me/og-image.svg"
      />

      <section className="min-h-screen bg-black/30 pt-8">
        <div className="mx-auto max-w-7xl px-7">
          <header className="mb-10 text-center text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
              Learn with confidence
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Learn Coding and AI Tools with NaukriQ
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-200">
              Find simple guides for coding basics, machine language, and the best AI tools for everyday learning.
            </p>
          </header>

          <div className="flex flex-wrap justify-center gap-9">
            {cardData.map((card, index) => (
              <Cards
                key={index}
                srcimg={card.srcimg}
                name={card.name}
                detailsProd={card.detailsProd}
                path={card.path}
                imageClassName="w-[240px] h-28 sm:w-[280px] sm:h-32"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;