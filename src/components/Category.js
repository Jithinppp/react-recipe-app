import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurger,
  faBowlRice,
  faPizzaSlice,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";

function Category() {
  return (
    <Wrapper>
      <CategoryItem to={"/cuisine/Indian"}>
        <FontAwesomeIcon icon={faBowlRice} />
        <h4>Indian</h4>
      </CategoryItem>
      <CategoryItem to={"/cuisine/Korean"}>
        <FontAwesomeIcon icon={faCheese} />
        <h4>Korean</h4>
      </CategoryItem>
      <CategoryItem to={"/cuisine/Chinese"}>
        <FontAwesomeIcon icon={faBurger} />
        <h4>Chinese</h4>
      </CategoryItem>
      <CategoryItem to={"/cuisine/American"}>
        <FontAwesomeIcon icon={faPizzaSlice} />
        <h4>American</h4>
      </CategoryItem>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const CategoryItem = styled(NavLink)`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  color: #fdfdfd;
  margin: 5px;
  padding: 10px 20px;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  h4 {
    font-size: 0.9rem;
    font-weight: 500;
    margin: 0 7px;
  }
  svg {
    font-size: 1.2rem;
    color: #242323;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
