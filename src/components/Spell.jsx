import React, { useState, useEffect } from "react";

import { api } from "../api";

import { Link } from "react-router-dom";

const Spell = () => {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setSpells(data);
      });
  }, []);

  return (
    <> 
      <div className="w-full">
        <div className="max-w-[450px] h-[650px] mx-auto">
          <div className="max-w-[420px] mx-auto p-16">
            {spells.map((spell) => {
              return (
                <Link to="/spelldetails">
                  <div className="bg-orange-600 bg-opacity-80 hover:bg-opacity-100 rounded py-4 mt-3 cursor-pointer">
                    <h2 className="text-white text-2xl text-center font-bold">
                      {spell.name}
                    </h2>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Spell;
