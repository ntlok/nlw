import { Link } from 'react-router-dom'

import logo from '../../images/logo.svg';
import back from '../../images/arrow-left.svg'

import './index.scss'

export function Header({ link }) {
	
  return (
    <header id="header-component">
      <img src={logo} alt="" />
      <Link to={link}>
        <img src={back} alt="" />
        <span>voltar para home</span>
      </Link>
    </header>
  );
}
