import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const res = await axios.get(
        "https://api.spoonacular.com/recipes/random?&number=12",
        {
          params: {
            apiKey: process.env.REACT_APP_API_KEY,
          },
        }
      );
      setPopular(res.data.recipes);
      localStorage.setItem("popular", JSON.stringify(res.data.recipes));
    }
  };

  return (
    <Wraper>
      <h3>Popular recipes</h3>
      <Splide
        options={{
          perPage: 4,
          gap: "1.5rem",
          pagination: false,
          arrows: false,
          drag: "free",
          breakpoints: {
            640: {
              perPage: 3,
              gap: ".5rem",
            },
          },
        }}
      >
        {popular.map((recipe, idx) => {
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
  margin: 4rem 0;
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

export default Popular;
