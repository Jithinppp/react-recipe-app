import React from "react";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faUtensils} />
      <Logo>Food Recipes</Logo>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

const Logo = styled.h2`
  margin: 0 1rem;
  letter-spacing: -1.5px;
  color: linear-gradient(to right, #f27121, #e94057);
`;

export default Header;
