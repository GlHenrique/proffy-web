import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

// import { Container } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/22779454?s=460&u=492f9f8def04565252ec8c5f02ec3e0f38910014&v=4"
          alt="Glênio Carvalho"
        />
        <div>
          <strong>Glênin Brabíssimo</strong>
          <span>Astrologia</span>
        </div>
      </header>

      <p>
        Este professor é mestre em tudo que ele faz. O brabo tem nome
        <br />
        <br />
        Foguete não tem ré. Esquece padrin.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 99999,99 G3X</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Contato" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
