import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/38501933?s=460&u=c37d8f46992a314dd8ca5ee6c6f7f435bdca7f2d&v=4"
          alt="Aldrin Junior"
        />
        <div>
          <strong>Aldrin Junior</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias da quimica avançada.
        <br /> <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências.Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="What's App" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
