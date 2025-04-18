import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: #000;
  color: #fff;
  border-radius: 18px;
  border: 1px solid #000;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  font-size: 1.2em;
  padding: 10px;
  min-width: 20%;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: #3f3f3f;
    color: #efefef;
  }
`;

export const Button = ({ convertToGif }) => {
  return <Btn onClick={convertToGif}>Convert</Btn>;
};
