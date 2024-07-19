import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div
      id="home"
      className="home"
      data-aos="fade-right"
      data-aos-duration="3000"
      data-aos-mirror="true"
    >
      <div className="homeContent">
        <h1>
          Olá, Meu nome é <span>Gabriel Macena</span>
        </h1>
        <h2 className="subtitle">Desenvolvedor Web</h2>
        <div className="buttonContent">
          <a
            href="https://github.com/gbmacena"
            target="_blank"
            className="buttonLink"
          >
            <FaGithub style={{ marginRight: "7px" }} /> Meu GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-macena-871333315/"
            target="_blank"
            className="buttonLink"
          >
            <FaLinkedin style={{ marginRight: "7px" }} /> Meu LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
