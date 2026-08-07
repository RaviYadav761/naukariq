import Cards from "../../Components/Cards";
import Seo from "../../Components/Seo";
import codingday1img from "../codingcard/codingimg/codingday1.png";
import codingday2img from "../codingcard/codingimg/CodingDay2.png";

const Movies = () => {
  const cardData = [
    {
      srcimg: codingday1img,
      name: "What is Coding?",
      path: "/codingday1",
      detailsProd:
        "Learn what coding is, how computers understand 0 and 1, machine language, assembly language, and programming basics.",
    },
{
  srcimg: codingday2img,
  name: "Frontend, Backend & Database",
  path: "/codingday2",
  detailsProd:
    "Learn what Frontend, Backend, and Database are, how they work together, and understand website development with a simple restaurant example.",
},
  ];

  return (
    <>
      <Seo
        title="Coding Articles | Learn Programming Step by Step"
        description="Read beginner-friendly coding tutorials on HTML, CSS, JavaScript, React, machine language, binary language, and programming basics."
        keywords="coding articles, programming tutorials, HTML, CSS, JavaScript, React, machine language, binary language"
        canonical="https://naukriq.me/coding-articles"
        ogTitle="Coding Articles | Learn Programming Step by Step"
        ogDescription="Beginner-friendly coding tutorials and programming basics for students and new developers."
        ogImage="https://naukriq.me/og-image.svg"
      />

      <section className="min-h-screen bg-black/30 pb-10 pt-8" aria-labelledby="coding-articles-heading">
        <div className="mx-auto max-w-7xl px-6">
          <header className="mb-10 text-center">
            <h1 id="coding-articles-heading" className="mb-3 text-4xl font-bold text-slate-900">
              Coding Articles
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-700">
              Learn coding from scratch with simple beginner-friendly tutorials. Understand programming, machine language, binary numbers, HTML, CSS, JavaScript, React, and much more.
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