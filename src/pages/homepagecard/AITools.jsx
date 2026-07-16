
import Cards from "../../Components/Cards";
import Seo from "../../Components/Seo";
import aistudioicon from "../../assets/images/aistudioicon.png";

const AITools = () => {
  const cardData = [
    {
      srcimg: aistudioicon,
      name: "Google AI Studio",
      path: "/aistudio",
      detailsProd:
        "Explore Google AI Studio and learn how to use one of the most useful AI platforms for prompts, coding, and creative work.",
    },
  ];

  return (
    <>
      <Seo
        title="Best AI Tools for Students and Developers"
        description="Discover beginner-friendly AI tools and guides for students, developers, and creators, including Google AI Studio and practical AI workflows."
        keywords="AI tools, Google AI Studio, ChatGPT, Gemini, Claude, AI websites, free AI tools"
        canonical="https://naukriq.me/aitools"
        ogTitle="Best AI Tools for Students and Developers"
        ogDescription="Explore practical AI tools and beginner-friendly guides for students and developers."
        ogImage="https://naukriq.me/og-image.svg"
      />

      <section className="min-h-screen bg-black/30 pt-8" aria-labelledby="ai-tools-heading">
        <div className="mx-auto max-w-7xl px-7">
          <header className="mb-10 text-center text-white">
            <h1 id="ai-tools-heading" className="text-4xl font-bold sm:text-5xl">
              Best AI Tools for Students and Developers
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-200">
              Learn about useful AI tools that can help you build projects, study faster, and create better content.
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
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AITools;