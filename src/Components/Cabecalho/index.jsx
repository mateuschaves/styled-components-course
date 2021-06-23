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

const Cabecalho = () => {
  return (
    <StyledHeader>
      <StyledLogo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <a className="btn-secundario" href="https://google.com">
          Ajuda
        </a>
        <a className="btn-primario" href="https://google.com">
          Sair
        </a>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
