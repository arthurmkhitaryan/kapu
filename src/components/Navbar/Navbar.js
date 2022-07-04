import React, {useState} from "react";
import {NavLink} from "react-router-dom";

//styles
import * as S from './Navbar.styles';

//images
import { ReactComponent as ShopLogo } from '../../images/svgs/shop.svg';
import { ReactComponent as BasketLogo } from '../../images/svgs/basket.svg';
import { ReactComponent as OrderLogo } from '../../images/svgs/order.svg';

export const Navbar = () => {

  return (
      <S.NavbarWrapper>
        <NavLink to='/'>
          <S.NavItem>
            <ShopLogo />
            <S.NavItemTitle>Shop</S.NavItemTitle>
          </S.NavItem>
        </NavLink>
        <NavLink to='/basket'>
          <S.NavItem>
            <BasketLogo />
            <S.NavItemTitle>Basket</S.NavItemTitle>
          </S.NavItem>
        </NavLink>
        <NavLink to='/orders'>
          <S.NavItem>
            <OrderLogo />
            <S.NavItemTitle>Orders</S.NavItemTitle>
          </S.NavItem>
        </NavLink>
      </S.NavbarWrapper>
  );
}