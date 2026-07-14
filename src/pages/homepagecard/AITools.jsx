
import Cards from "../../Components/Cards";
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