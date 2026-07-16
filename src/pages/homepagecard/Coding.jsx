import Cards from "../../Components/Cards";
import { Helmet } from "react-helmet-async";
import codingday1img from "../codingcard/codingimg/codingday1.png";

const Movies = () => {

  const cardData = [
    {
      srcimg: codingday1img,
      name: "What is Coding?",
      path: "/codingday1",
      detailsProd:
        "Learn what coding is, how computers understand 0 and 1, machine language, assembly language, and programming basics."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Coding Articles | Learn Programming Step by Step | Naukriq</title>

        <meta
          name="description"
          content="Read beginner-friendly coding tutorials on HTML, CSS, JavaScript, React, Machine Language, Programming Basics and more."
        />

        <meta
          name="keywords"
          content="Coding, Programming, HTML, CSS, JavaScript, React, Machine Language, Binary Language, Naukriq"
        />

        <link
          rel="canonical"
          href="https://naukriq.me/CodingArtical"
        />
      </Helmet>

      <section className="bg-black/30 w-full min-h-screen pt-8 pb-10">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-bold text-center mb-3">
            Coding Articles
          </h1>

          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            Learn Coding from scratch with simple beginner-friendly tutorials.
            Understand Programming, Machine Language, Binary Numbers,
            HTML, CSS, JavaScript, React and much more.
          </p>

          <div className="flex flex-wrap justify-center gap-9">
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

        </div>

      </section>
    </>
  );
};

export default Movies;





























// import Cards from "../../Components/Cards";
// import codingday1img from "../codingcard/codingimg/codingday1.png";

// const Movies = () => {

// const cardData = [
//   {
//     srcimg: codingday1img,
//     name: "Coding",
//       path: "/codingday1",
//     detailsProd:
//       "You use Instagram, Facebook, and YouTube every day, but have you ever wondered how these platforms are built?."
//   },
// ];
//   return (

//     <>
  
//     <section className="bg-black/30 w-full min-h-screen pt-8">

//       <div className="max-w-7xl mx-auto flex flex-wrap  justify-center gap-9 px-7">
//         {cardData.map((card, index) => (
//           <Cards
//             key={index}
//             srcimg={card.srcimg}
//             name={card.name}
//             detailsProd={card.detailsProd}
//             path={card.path}
//             imageClassName="w-[440px] h-48 sm:w-[480px] sm:h-48"
//           />
//         ))}
//       </div>

//     </section>

//     </>

//   );
// }

// export default Movies;