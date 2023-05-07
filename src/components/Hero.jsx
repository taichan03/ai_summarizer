import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full mb-10 pt-3 flex justify-between items-center flex-row">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/taichan03")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1>
        Summarize Articles with
        <br /> OpenAI GPT-4
      </h1>
    </header>
  );
};

export default Hero;
