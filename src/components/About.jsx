import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const technologies = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3 />, name: "CSS" },
  { icon: <IoLogoJavascript />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaSass />, name: "Sass" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <RiTailwindCssFill />, name: "Tailwind" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
  { icon: <FaGitAlt />, name: "Git" },
];

const About = () => {
  return (
    <div
      id="about"
      className="containerAbout"
      data-aos="fade-left"
      data-aos-duration="3000"
      data-aos-mirror="true"
    >
      <div className="aboutContent">
        <h1>
          <span>Sobre</span> mim
        </h1>
        <p>
          Olá! Meu nome é <span>Gabriel Macena</span>, tenho 20 anos e sou um
          desenvolvedor Web. Moro em João Pessoa, PB.
          <span> Com uma paixão por tecnologia</span> e uma afinidade especial
          por <span>React</span>, estou sempre em busca de novas maneiras de
          <span> resolver problemas</span> e <span>otimizar processos</span>.
          Estou constantemente aprendendo e aprimorando minhas habilidades. Além
          de ser um entusiasta da tecnologia, me considero um
          <span> excelente resolvedor de problemas</span> e trabalho muito bem
          em
          <span> equipe</span>. Atualmente, estou cursando Análise e
          Desenvolvimento de Sistemas, o que complementa minha jornada no
          desenvolvimento de software.
        </p>

        <div className="technologies">
          {technologies.map((tech, index) => (
            <div className="technology" key={index}>
              {tech.icon}
              <div className="tooltip">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
