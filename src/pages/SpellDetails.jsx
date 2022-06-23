import React from "react";
import Navbar from "../components/Navbar";

import { AiOutlineEdit, AiOutlineDelete, AiFillBackward } from "react-icons/ai";
import { GiSpellBook } from "react-icons/gi";

import { Link } from "react-router-dom";

const SpellDetails = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="absolute w-full h-full top-0 left-0 bg-gray-900/40 -z-50"></div>
        <div className="max-w-[450px] h-[650px] mx-auto">
          <div className="max-w-[420px] mx-auto py-16">
            <div className="bg-orange-600 bg-opacity-80 rounded py-4 mt-3">
              <h2 className="text-white text-center text-4xl mb-2 border-b border-orange-900 pb-3 font-bold">
                Feitiço 2
              </h2>
              <div className="flex items-baseline justify-center text-white">
                <h3 className=" text-center uppercase mr-3">Tipo do feitiço</h3>
                <GiSpellBook size={30} />
              </div>
              <p className="text-white text-center my-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, repellat cum rem molestiae id temporibus voluptate
                exercitationem, numquam tenetur beatae quas ipsa culpa
                laboriosam odio a tempore. Sapiente, maiores corporis.
              </p>
              <div className="flex justify-evenly mt-4">
              <p className="text-gray-400 text-center italic text-sm">
                Data inclusão
              </p>
              <Link to='/spelledit'>
                <AiOutlineEdit
                  className="text-white cursor-pointer hover:text-yellow-400"
                  size={30}
                />
              </Link>
                <AiOutlineDelete
                  className="text-white cursor-pointer hover:text-red-800"
                  size={30}
                />
              </div>
            </div>
            <Link to="/spells">
              <button className="text-cneter flex items-center text-xl p-3 mx-auto mr-4 text-white hover:text-yellow-400">
                <AiFillBackward size={30} />
                <p className="ml-2 hidden md:flex">VOLTAR</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpellDetails;
