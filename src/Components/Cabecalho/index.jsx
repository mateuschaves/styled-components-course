import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from 'styled-components';

import { primaryColor } from '../UI/Variables';

const StyledHeader = styled.nav`
  background-color: ${primaryColor};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const StyledLogo = styled.img`
   height: 50px;
   width: 50px;
`;

const StyledButton = styled.a`
   text-align: center;
   border-radius: 3px;
   padding: 5px 20px;
   margin: 0 10px;
   font-weight: 600;
   border: 2px solid white;

   color: ${({primary}) => primary ? 'white' : primaryColor };
   background: ${({primary}) => primary ? 'transparent' : 'white' };
`;

const Cabecalho = () => {
  return (
    <StyledHeader>
      <StyledLogo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <StyledButton primary href="https://google.com">
          Ajuda
        </StyledButton>
        <StyledButton  href="https://google.com">
          Sair
        </StyledButton>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
