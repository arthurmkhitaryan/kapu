import React from 'react'
import { Link } from "react-router-dom";

//styles
import * as S from './Header.styles';

//images
import Logo from "../../images/logo.png";


export const Header = () => {
  return (
      <S.HeaderWrapper>
        <Link to={{ pathname: "/" }}><img src={Logo} alt="logo"/></Link>
      </S.HeaderWrapper>
  );
}