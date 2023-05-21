import React from "react";
import styled from "styled-components";
import { AiOutlineCamera } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const TopBar = styled.div`
  color: white;
  background-color: #343a40;
  padding: 13px;
  font-size: 20px;
  display:flex;
  justify-content:space-between;
  padding-left:250px;
  padding-right:250px;
  .menu {
    color: gray;
    text-align: right;
    font-size: 30px;
  }
`;

const Div = styled.div`
  //display:flex;
`

const Top = () => {
  return (
    <>
      <TopBar>
        <Div>
          <AiOutlineCamera /> Album
        </Div>
        <AiOutlineMenu class="menu" />
      </TopBar>
    </>
  );
};

export default Top;
