import Cards from "../../Components/Cards";
import { Helmet } from "react-helmet-async";
import aistudioicon from "../../assets/images/aistudioicon.png";

const AITools = () => {
  const cardData = [
    {
      srcimg: aistudioicon,
      name: "Google AI Studio",
      path: "/aistudio",
      detailsProd:
        "Learn Google AI Studio from beginner to advanced. Explore prompts, image generation, coding, API, Gemini models, and practical AI tutorials for students and developers.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best AI Tools for Students and Developers | NaukariQ</title>

        <meta
          name="description"
          content="Discover the best AI tools including Google AI Studio, ChatGPT, Gemini, Claude, Perplexity and more. Learn AI with beginner-friendly tutorials and guides."
        />

        <meta
          name="keywords"
          content="AI Tools, Google AI Studio, Gemini AI, ChatGPT, Claude AI, Perplexity AI, Free AI Tools, AI Tutorials, Artificial Intelligence"
        />

        <meta name="author" content="NaukariQ" />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://naukriq.me/aitools"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Best AI Tools for Students and Developers"
        />

        <meta
          property="og:description"
          content="Explore the best free AI tools including Google AI Studio, ChatGPT, Gemini, Claude and more."
        />

        <meta
          property="og:url"
          content="https://naukriq.me/aitools"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://naukriq.me/aistudioicon.png"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Best AI Tools for Students and Developers"
        />

        <meta
          name="twitter:description"
          content="Learn Google AI Studio, ChatGPT, Gemini, Claude and other powerful AI tools."
        />

        <meta
          name="twitter:image"
          content="https://naukriq.me/aistudioicon.png"
        />
      </Helmet>

      <section className="bg-black/30 w-full min-h-screen pt-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-9 px-7">
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
      </section>
    </>
  );
};

export default AITools;