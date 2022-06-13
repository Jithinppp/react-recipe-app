import React from "react";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      <Link to={"/"}>
        <FontAwesomeIcon icon={faUtensils} />
        <Logo>Food Recipes</Logo>
      </Link>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 2rem;

  svg {
    font-size: 2rem;
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #242323;
  }
`;

const Logo = styled.h2`
  margin: 0 1rem;
  letter-spacing: -1.5px;
  color: linear-gradient(to right, #f27121, #e94057);
`;

export default Header;
