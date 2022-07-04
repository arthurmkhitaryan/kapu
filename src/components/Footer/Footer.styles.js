import styled from "styled-components/macro";

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`

export const FooterCopyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #313446;
  
  & > p {
    margin: 0;
    padding: 5px 15px;
    color: rgb(255, 255, 255, 0.4);
    font: 500 9px/20px 'Inter', sans-serif;
    text-align: center;
  }
`
