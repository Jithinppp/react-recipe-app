import React, { useState } from "react";
import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("searched/" + input);
  };

  return (
    <SearchWraper>
      <SearchForm onSubmit={submitHandler}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type={"text"}
          placeholder="Search cuisine"
          value={input}
          onChange={changeHandler}
        />
      </SearchForm>
    </SearchWraper>
  );
}

const SearchWraper = styled.div`
  margin-top: 2rem;
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  input {
    outline: none;
    border: none;
    /* background-color: #fff9f9; */
    color: #242323;
    border-radius: 6px;
    font-size: 1rem;
    height: 35px;
    width: 100%;
    padding-left: 2.5rem;
    background: #ede8e8;
    background: linear-gradient(to right, #ede8e8 0%, #ffffff 100%);
    /* -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */

    /* -webkit-background-clip: text; */
    /* -webkit-text-fill-color: transparent; */
  }
  svg {
    color: #242323;
    left: 0;
    z-index: 3;
    position: absolute;
    margin: 0 10px;
  }
`;

export default Search;
