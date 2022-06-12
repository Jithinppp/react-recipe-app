import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let prams = useParams();

  const getCuisine = async (name) => {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?&cuisine=${name}`,
      {
        params: {
          apiKey: process.env.REACT_APP_API_KEY,
        },
      }
    );

    setCuisine(res.data.results);
  };

  useEffect(() => {
    getCuisine(prams.type);
  }, [prams.type]);

  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  border-radius: 0.8rem;
  img {
    width: 100%;
    border-radius: 0.8rem;
    object-fit: cover;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
