import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/70 -z-50"></div>
      <div className="absolute top-[30%] text-center w-full">
        <h1 className="font-semibold leading-[4rem] text-5xl text-orange-700">
          | Descubra a magia com WikiPotter |
        </h1>
        <div className="max-w-[300px] mx-auto my-36 flex justify-between">
          <button className="w-[140px] rounded-full p-3 bg-orange-400  hover:bg-orange-600 text-white text-xl">
            <Link to='/login'>ENTRAR</Link>
          </button>
          <button className="w-[140px] rounded-full p-3 bg-orange-400 hover:bg-orange-600 text-white text-xl">
            <Link to='/signup'>CADASTRAR</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
