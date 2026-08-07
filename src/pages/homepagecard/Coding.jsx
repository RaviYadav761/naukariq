import Cards from "../../Components/Cards";
import Seo from "../../Components/Seo";
import codingday1img from "../codingcard/codingimg/codingday1.png";
import codingday2img from "../codingcard/codingimg/codingday2.png";

const CodingArticles = () => {
  const cardData = [
    {
      srcimg: codingday1img,
      name: "What is Coding?",
      path: "/codingday1",
      detailsProd:
        "Learn what coding is, how computers understand 0 and 1, and the basics of programming languages.",
    },
    {
      srcimg: codingday2img,
      name: "Frontend, Backend & Database",
      path: "/codingday2",
      detailsProd:
        "Discover how frontend, backend, and databases work together to build real websites and apps.",
    },
  ];

  return (
    <>
      <Seo
        title="Coding Articles | Learn Programming Step by Step"
        description="Read beginner-friendly coding tutorials on HTML, CSS, JavaScript, React, machine language, binary numbers, and programming basics."
        keywords="coding articles, programming tutorials, HTML, CSS, JavaScript, React, machine language, binary numbers"
        canonical="https://naukriq.me/coding-articles"
        ogTitle="Coding Articles | Learn Programming Step by Step"
        ogDescription="Beginner-friendly coding tutorials and programming basics for students and new developers."
        ogImage="https://naukriq.me/og-image.svg"
      />

      <section className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-12 overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-slate-900/95 p-10 shadow-2xl shadow-cyan-500/10">
            <span className="mb-4 inline-flex rounded-full bg-cyan-500/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Coding Guide
            </span>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Learn Coding with a Strong, Modern UI
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
              Start building practical programming skills with easy-to-follow coding articles, clear examples, and beautiful page design.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {cardData.map((card, index) => (
              <Cards
                key={index}
                srcimg={card.srcimg}
                name={card.name}
                detailsProd={card.detailsProd}
                path={card.path}
                imageClassName="w-full h-72"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CodingArticles;




























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