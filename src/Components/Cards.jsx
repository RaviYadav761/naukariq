import { Link } from "react-router-dom";

const Cards = ({ name, detailsProd, srcimg, path, imageClassName = "w-[190px] h-20" }) => {
  return (
    <article className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-blue-500 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link to={path} className="block">
        <img
          className={`${imageClassName} mx-auto object-contain`}
          src={srcimg}
          alt={`${name} illustration`}
          loading="lazy"
          decoding="async"
        />

        <div className="p-5">
          <h2 className="border border-blue-500 bg-blue-50 px-3 py-2 text-center text-2xl font-bold text-slate-800">
            {name}
          </h2>

          <p className="py-5 text-slate-600">{detailsProd}</p>
        </div>
      </Link>
    </article>
  );
};

export default Cards;