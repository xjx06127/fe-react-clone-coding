import React from "react";
import styled from "styled-components";

const Backgroud = styled.div`
  width: 350px;
  height: 370px;
  border-radius: 5px;
  background-color: white;
  margin-top:20px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px rgba(0,0,0,.075);
`;

const Img = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width:100%;
  margin-top: 0px;
  content: url(${(props) => props.url});
`;

const Content = styled.p`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

const ViewButton = styled.button`
    background-color:white;
    border:solid 1px;
    border-color:#6c757d;
    color:#6c757d;
    border-right-width:0.1px;
    border-radius:3px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    padding:7px;
    transition:background-color .25s ease;
    &:hover{
      background-color:#6c757d;
      color:white;
    }
`;


const EditButton = styled.button`
    background-color:white;
    border:solid 1px;
    border-color:#6c757d;
    color:#6c757d;
    border-left-width:0px;
    border-radius:3px;
    border-top-left-radius:0px;
    border-bottom-left-radius:0px;
    padding:7px;
    transition:background-color .25s ease;
    &:hover{
      background-color:#6c757d;
      color:white;
    }
`;

const Div = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
`;

const Time = styled.p`
  color:#6c757d;
  font-size:14px;
`
const Album = (props) => {
  return (
    <>
      <Backgroud>
        <Img url={props.url} />
        <Content>{props.content}</Content>
        <Div>
          <div>
            <ViewButton>View</ViewButton>
            <EditButton>Edit</EditButton>
          </div>
          <Time>9 mins</Time>
        </Div>
      </Backgroud>
    </>
  );
};

export default Album;
