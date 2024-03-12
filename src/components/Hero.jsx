import React from "react";
import { logo } from "../assets";

function Hero() {
  return (
    <header className="w-full flex justify-center items-center  flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_log" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/aniketpatil4308")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Sumarize Articles With <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Sumarize , an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
}

export default Hero;
