import React from "react";
import projeto1 from "../imgs/projeto1.png";
import projeto2 from "../imgs/projeto2.png";
import projeto3 from "../imgs/projeto3.png";
import projeto4 from "../imgs/projeto4.png";
import projeto5 from "../imgs/projeto5.png";
import projeto6 from "../imgs/projeto6.png";
import {
  FaGithub,
  FaRegEye,
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Foodie",
    description:
      "Uma landing page para um restaurante, projetada para atrair clientes com um design moderno e atraente.",
    image: projeto1,
    technologies: [
      { icon: <FaCss3 />, name: "CSS" },
      { icon: <FaReact />, name: "React" },
    ],
    links: {
      demo: "https://foodie-landing-page-three.vercel.app/",
      repository: "https://github.com/gbmacena/Foodie-Landing-Page",
    },
  },
  {
    id: 2,
    title: "Cardápio Online ",
    description:
      "Página para uma hamburgueria, onde os clientes podem fazer pedidos e enviá-los via WhatsApp.",
    image: projeto2,
    technologies: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <RiTailwindCssFill />, name: "Tailwind" },
      { icon: <IoLogoJavascript />, name: "JavaScript" },
    ],
    links: {
      demo: "https://projeto-cardapio-online-six.vercel.app/",
      repository: "https://github.com/gbmacena/Projeto_CardapioOnline",
    },
  },
  {
    id: 3,
    title: "Buscador de Imagens",
    description:
      "Um aplicativo de busca de imagens que utiliza uma API para exibir os resultados.",
    image: projeto3,
    technologies: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaSass />, name: "Sass" },
      { icon: <IoLogoJavascript />, name: "JavaScript" },
    ],
    links: {
      demo: "https://projeto-buscador-de-imagens.vercel.app/",
      repository: "https://github.com/gbmacena/Projeto_Buscador_de_Imagens",
    },
  },
  {
    id: 4,
    title: "Gerador de QR Code",
    description: "Aplicação que gera QR Codes personalizados usando uma API.",
    image: projeto4,
    technologies: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3 />, name: "CSS" },
      { icon: <IoLogoJavascript />, name: "JavaScript" },
    ],
    links: {
      demo: "https://gerador-de-qr-code-ten.vercel.app/",
      repository: "https://github.com/gbmacena/Gerador-de-QR-Code",
    },
  },
  {
    id: 5,
    title: "Gerenciador de Livros",
    description:
      "Aplicação para gerenciamento de livros, permitindo criar, editar e deletar livros facilmente.",
    image: projeto5,
    technologies: [
      { icon: <FaReact />, name: "React" },
      { icon: <FaSass />, name: "Sass" },
      { icon: <IoLogoJavascript />, name: "JavaScript" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiMongodb />, name: "MongoDB" },
      ,
    ],
    links: {
      demo: "https://interface-book-tracker.vercel.app/",
      repository: "https://github.com/gbmacena/Projeto_gerenciamento-de-livros",
    },
  },
  {
    id: 6,
    title: "Contagem Regressiva",
    description:
      "Página que exibe uma contagem regressiva até o final do ano, utilizando datas no JavaScript.",
    image: projeto6,
    technologies: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3 />, name: "CSS" },
      { icon: <IoLogoJavascript />, name: "JavaScript" },
    ],
    links: {
      demo: "https://projeto-countdown-liart.vercel.app/",
      repository: "https://github.com/gbmacena/Projeto_Countdown",
    },
  },
];

export default function Projects() {
  return (
    <div
      id="projects"
      className="projectsContainer"
      data-aos="fade-right"
      data-aos-duration="3000"
      data-aos-mirror="true"
    >
      <h1>
        Meus <span>Projetos</span>
      </h1>
      <div className="projectsGrid">
        {projects.map((project) => (
          <div className="projectCard" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="projectImage"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <div key={index} className="technology">
                  {tech.icon}
                  <div className="tooltip">{tech.name}</div>
                </div>
              ))}
            </div>
            <div className="buttonContent">
              <a href={project.links.demo} target="_blank">
                <FaRegEye style={{ marginRight: "7px" }} /> Demo
              </a>
              <a href={project.links.repository} target="_blank">
                <FaGithub style={{ marginRight: "7px" }} /> Repositório
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
