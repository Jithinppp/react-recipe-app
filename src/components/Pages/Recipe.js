import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const prams = useParams();
  const [recipeInfo, serRecipeInfo] = useState({});
  const [activeButton, setActiveButton] = useState("instructions");

  const getRecipe = async (name) => {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/${name}/information`,
      {
        params: {
          apiKey: process.env.REACT_APP_API_KEY,
        },
      }
    );
    serRecipeInfo(res.data);
  };

  useEffect(() => {
    getRecipe(prams.name);
  }, [prams.name]);

  return (
    <DetialWraper>
      <TitleImageContainer>
        <h3>{recipeInfo.title}</h3>
        <img src={recipeInfo.image} alt={recipeInfo.title} />
      </TitleImageContainer>
      <DetialsContainer>
        <ButtonContainer>
          <Button
            className={activeButton === "instructions" ? "active" : ""}
            onClick={() => setActiveButton("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeButton === "ingredients" ? "active" : ""}
            onClick={() => setActiveButton("ingredients")}
          >
            Ingredients
          </Button>
        </ButtonContainer>
        {activeButton === "instructions" && (
          <Information>
            <Summary
              dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}
            ></Summary>
            <p
              dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}
            ></p>
          </Information>
        )}
        {activeButton === "ingredients" && (
          <ul>
            {recipeInfo.extendedIngredients.map((ing) => {
              return <li>{ing.original}</li>;
            })}
          </ul>
        )}
      </DetialsContainer>
    </DetialWraper>
  );
}

const DetialWraper = styled.div`
  margin: 4rem 0rem;
  display: flex;
  a {
    text-decoration: none;
    color: #242323;
  }
  .active {
    background: #242323;
    color: white;
  }

  @media (max-width: 946px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  img {
    border-radius: 1rem;
    width: 450px;
    height: auto;
  }
`;

const DetialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  ul {
    line-height: 30px;

    li {
      margin-left: 1rem;
      font-weight: 600;
    }
  }
`;

const TitleImageContainer = styled.div`
  margin: 0 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 0.5rem 2rem;
  margin: 1rem;
  color: #313131;
  background: white;
  border: 2px solid #242323;
  font-weight: 500;
  cursor: pointer;
`;

const Information = styled.div`
  width: 100%;
  padding: 0 10px;
  p {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`;
const Summary = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`;

export default Recipe;
