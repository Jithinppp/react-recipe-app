import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

function Veggies() {
  const [veggies, setVeggies] = useState([]);

  useEffect(() => {
    getVeggies();
  }, []);
  const getVeggies = async () => {
    const check = localStorage.getItem("veggies");
    if (check) {
      setVeggies(JSON.parse(check));
    } else {
      const res = await axios.get(
        "https://api.spoonacular.com/recipes/random?&number=12&tags=vegetarian",
        {
          params: {
            apiKey: process.env.REACT_APP_API_KEY,
          },
        }
      );
      setVeggies(res.data.recipes);
      localStorage.setItem("veggies", JSON.stringify(res.data.recipes));
    }
  };

  return (
    <Wraper>
      <h3>veggies recipes</h3>
      <Splide
        options={{
          perPage: 3,
          gap: "2rem",
          pagination: false,
          arrows: false,
          drag: "free",
          breakpoints: {
            640: {
              perPage: 2,
              gap: ".5rem",
            },
          },
        }}
      >
        {veggies.map((recipe, idx) => {
          return (
            <SplideSlide key={idx}>
              <Card>
                <Link to={"/recipe/" + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wraper>
  );
}

const Wraper = styled.div`
  margin: 2rem 0;
`;
const Card = styled.div`
  min-height: 15rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 1rem;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    transform: translate(-50%, 0%);
    color: white;
    text-align: center;
    font-size: 1rem;
    bottom: 1%;
    font-weight: 500;
    @media (max-width: 500px) {
      font-size: 0.7rem;
    }
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggies;
