import React from "react";
import styled from "styled-components";

const BlueButton = styled.button`
  font-size: 15px;
  background-color:#007bff;
  color:white;
  margin-right:3px;
  border-radius:5px;
  border:none;
  padding:10px;
  padding-left:16px;
  padding-right:16px;
  transition:background-color .25s ease;
  &:hover{
    background-color:#006fe6;
  }
  &:active{
    outline: #99caff solid 4px;
  }
`;

const GrayButton = styled.button`
  font-size: 15px;
  background-color:#6c757d;
  color:white;
  border:none;
  margin-left:2px;
  border-radius:5px;
  padding:10px;
  padding-left:16px;
  padding-right:16px;
  transition:background-color .25s ease;
  &:hover{
    background-color:#535a5f;
  }
  &:active{
    outline: #c8ccd0 solid 4px;
  }
`;

const Container = styled.div`
    margin-top:30px;
    text-align:center;
    margin-bottom:100px;
`

const Button = () => {
  return (
    <>
      <Container>
        <BlueButton>Main to call action</BlueButton>
        <GrayButton>Secondary action</GrayButton>
      </Container>
    </>
  );
};

export default Button;
