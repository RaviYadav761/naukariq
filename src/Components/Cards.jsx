import { Link } from "react-router-dom";

const Cards = ({ name, detailsProd, srcimg, path, imageClassName = "w-[190px] h-20" }) => {
  return (

    <Link to={path}>

      <div className="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden cursor-pointer border border-blue-500">

        <img
          className={`${imageClassName} mx-auto object-contain`}
          src={srcimg}
          alt={name}
        />

        <div className="p-5">
          <h1 className="text-2xl font-bold border text-center border-blue-500">
            {name}
          </h1>

          <p className="py-5">{detailsProd}</p>
        </div>

      </div>

    </Link>
  );
};

export default Cards;