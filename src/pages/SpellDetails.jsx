import React from "react";

import {AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import Navbar from "../components/Navbar";

const SpellDetails = () => {
  return (
    <>
      <Navbar/>
      <div className="w-full">
        <div className="max-w-[450px] h-[650px] mx-auto">
          <div className="max-w-[420px] mx-auto py-16">
            <div className="bg-orange-600 bg-opacity-80 rounded py-4 mt-3">
                <h2 className="text-white text-2xl text-center font-bold">Feitiço 2</h2>
                <p className="text-white text-center mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, repellat cum rem molestiae id temporibus voluptate exercitationem, numquam tenetur beatae quas ipsa culpa laboriosam odio a tempore. Sapiente, maiores corporis.</p>
                <div className="flex justify-evenly mt-4">
                  <AiOutlineEdit className="text-white cursor-pointer hover:text-yellow-400" size={20}/>
                  <AiOutlineDelete className="text-white cursor-pointer hover:text-yellow-400" size={20}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpellDetails;
