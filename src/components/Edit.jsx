import React from "react";
import Navbar from "../components/Navbar";

import {
  AiFillCheckCircle,
  AiOutlineDelete,
  AiFillBackward,
} from "react-icons/ai";
import { GiSpellBook } from "react-icons/gi";

import { Link } from "react-router-dom";
const Edit = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="w-full">
          <div className="absolute w-full h-full top-0 left-0 bg-gray-900/40 -z-50"></div>
          <div className="max-w-[450px] h-[650px] mx-auto">
            <div className="max-w-[420px] mx-auto py-16">
              <div className="bg-orange-600 bg-opacity-80 rounded py-4 mt-3">
                <input
                  type="text"
                  className="text-white placeholder:text-gray-300 placeholder:italic bg-transparent w-full text-center text-4xl mb-2 border-b  border-orange-900 pb-3 font-bold"
                  placeholder="Feitiço 2"
                />
                <div className="flex items-baseline justify-center text-white">
                  <input
                    type="text"
                    className="bg-transparent placeholder:text-gray-300 placeholder:italic text-center uppercase mr-3"
                    placeholder="Tipo do feitiço"
                  />
                  <GiSpellBook size={30} />
                </div>
                <textarea
                  className="text-white bg-transparent placeholder:text-gray-300 placeholder:italic w-full text-center my-4"
                  cols="60"
                  rows="5"
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, repellat cum rem molestiae id temporibus voluptate exercitationem, numquam tenetur beatae quas ipsa culpa laboriosam odio a tempore. Sapiente, maiores corporis."
                />
                <div className="flex justify-evenly mt-4">
                  <p className="text-gray-400 text-center italic text-sm">
                    Data inclusão
                  </p>
                  <AiFillCheckCircle
                    className="text-white cursor-pointer hover:text-green-400"
                    size={30}
                  />
                  <AiOutlineDelete
                    className="text-white cursor-pointer hover:text-red-800"
                    size={30}
                  />
                </div>
              </div>
              <Link to="/spelldetails">
                <button className="text-cneter flex items-center text-xl p-3 mx-auto mr-4 text-white hover:text-yellow-400">
                  <AiFillBackward size={30} />
                  <p className="ml-2 hidden md:flex">VOLTAR</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Edit;
