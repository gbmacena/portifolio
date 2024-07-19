import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      subject: subject,
    };

    emailjs
      .send(
        "service_qqudsjs",
        "template_6opvgfi",
        templateParams,
        "Gv93GyOkWGW97ig_p"
      )
      .then(
        (response) => {
          console.log("Email sent", response.status, response.text);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (err) => {
          console.log(err);
        }
      );
  }

  return (
    <div
      id="contact"
      className="contactContainer"
      data-aos="zoom-in"
      data-aos-mirror="true"
      data-aos-duration="1500"
    >
      <h1>
        Fale <span>Comigo</span>
      </h1>
      <form onSubmit={sendEmail}>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Nome"
            className="input"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="input"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Assunto"
          className="inputSubject"
          value={subject}
          onChange={(ev) => setSubject(ev.target.value)}
        />
        <textarea
          placeholder="Mensagem"
          className="textarea"
          value={message}
          onChange={(ev) => setMessage(ev.target.value)}
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
