
import Cards from "../../Components/Cards";
import codingday1img from "../codingcard/codingimg/codingday1.png";

const Movies = () => {

const cardData = [
  {
    srcimg: codingday1img,
    name: "Coding",
      path: "/codingday1",
    detailsProd:
      "You use Instagram, Facebook, and YouTube every day, but have you ever wondered how these platforms are built?."
  },
];
  return (

    <>
  
    <section className="bg-black/30 w-full min-h-screen pt-8">

      <div className="max-w-7xl mx-auto flex flex-wrap  justify-center gap-9 px-7">
        {cardData.map((card, index) => (
          <Cards
            key={index}
            srcimg={card.srcimg}
            name={card.name}
            detailsProd={card.detailsProd}
            path={card.path}
            imageClassName="w-[440px] h-48 sm:w-[480px] sm:h-48"
          />
        ))}
      </div>

    </section>

    </>

  );
}

export default Movies;