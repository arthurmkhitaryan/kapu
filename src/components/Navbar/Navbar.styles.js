import styled from "styled-components/macro";

export const NavbarWrapper = styled.div`
  padding: 16px 40px;
  display: flex;
  justify-content: space-between;
  background: #202435;
  
  & > a {
    text-decoration: none !important;
  }
  
  & svg {
    width: 30px;
    height: 30px;
    margin: 0 auto 4px;
  }
  
  & > .active p {
    color: #68A315;
  }

  & > .active svg {
    fill: #68A315;
  }
`

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
`

export const NavItemTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 10px;
  line-height: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #878787;
`

