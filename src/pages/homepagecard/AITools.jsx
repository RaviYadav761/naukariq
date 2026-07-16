
import Cards from "../../Components/Cards";
import { Helmet } from "react-helmet-async";
import aistudioicon from "../../assets/images/aistudioicon.png"


const AITools = () => {



const cardData = [
  {
    srcimg: aistudioicon,
    name: "Google AI Studio",
      path: "/aistudio",
    detailsProd:
      "AIStudio one of the best AI , this AI all information are available  here what you want",
  },
];


  return (
    <>
    <Helmet>
    <title>Best AI Tools for Students and Developers | NaukariQ</title>

    <meta
      name="description"
      content="Discover the best AI tools including Google AI Studio, ChatGPT, Gemini, Claude, Perplexity and more."
    />

    <meta
      name="keywords"
      content="AI Tools, Google AI Studio, ChatGPT, Gemini, Claude, AI websites, Free AI Tools"
    />

    <link
      rel="canonical"
      href="https://naukriq.me/aitools"
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
  )
}

export default AITools