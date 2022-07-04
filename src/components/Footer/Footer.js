import React from "react";

//styles
import * as S from './Footer.styles';

//images
import ShopLogo from '../../images/svgs/shop.svg';
import {Navbar} from "../Navbar";


export const Footer = () => {
  return (
      <S.FooterWrapper>
        <Navbar />
        <S.FooterCopyright>
          <p>©2022 New Retail Africa, Inc.</p>
        </S.FooterCopyright>
      </S.FooterWrapper>
  );
}
