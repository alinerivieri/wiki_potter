import React from "react";

import { Link } from "react-router-dom";

const Spell = () => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[450px] h-[650px] mx-auto">
          <div className="max-w-[420px] mx-auto p-16">
            <Link to='/spelldetails'>
                <div className="bg-orange-600 bg-opacity-80 hover:bg-opacity-100 rounded py-4 mt-3 cursor-pointer">
                    <h2 className="text-white text-2xl text-center font-bold">FEITIÇO 1</h2>
                </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spell;
