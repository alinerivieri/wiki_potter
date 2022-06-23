import React from "react";
import Navbar from "../components/NavbarLogin";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Link to="/">
        <Navbar />
      </Link>
      <div className="w-full">
        <div className="absolute w-full h-full top-0 left-0 bg-gray-900/70 -z-50"></div>
        <div className="max-w-[450px] h-[650px] mx-auto">
          <div className="max-w-[320px] mx-auto py-16">
            <form className="w-full mt-[30%] flex flex-col py-4">
              <h2 className="text-white font-bold text-center text-2xl">
                ACESSAR
              </h2>
              <input
                className="p-3 my-2 rounded-full"
                type="email"
                placeholder="E-mail"
              />
              <input
                className="p-3 my-2 rounded-full"
                type="password"
                placeholder="Senha"
              />
              <Link to="/spells">
                <button className="my-6 w-full rounded-full py-2 bg-orange-400 hover:bg-orange-600 text-white text-xl">
                  ENTRAR
                </button>
              </Link>
              <div>
                <p className="text-white text-center">
                  Não possui acesso?{" "}
                  <span className="font-bold hover:text-orange-600">
                    <Link to="/signup">CADASTRE-SE</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
