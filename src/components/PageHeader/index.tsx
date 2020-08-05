import React from 'react';
import { Link } from 'react-router-dom';
import { Props } from './types';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import './styles.css';

// import { Container } from './styles';

const PageHeader: React.FC<Props> = (props) => {
  const { title, children } = props;

  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
