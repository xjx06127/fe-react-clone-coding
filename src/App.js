// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다.
import React from "react"
import Top from "./components/Top/Top"
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import Explanation from "./components/Explanation/Explanation";
import Button from "./components/Button/Button";
import Album from "./components/Album/Album";
import styled from "styled-components";

const AlbumWrapper = styled.div`
  margin-left: 215px;
  margin-right: 215px;
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
`
const A = styled.div`
  background-color:#F9F8FA;
  padding-top:30px;
  padding-bottom:30px; 
`

function App() {
  return <>
  <GlobalStyle></GlobalStyle>
  <Top/>
  <Explanation></Explanation>
  <Button></Button>
  <A>
  <AlbumWrapper>
  <Album url="env.jpg" content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."></Album>
  <Album url="env.jpg" content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."></Album>
  <Album url="env.jpg" content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."></Album>
  <Album url="env.jpg" content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."></Album>
  <Album url="env.jpg" content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."></Album>
  <Album url="env.jpg" content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."></Album>
  <Album url="env.jpg" content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."></Album>
  <Album url="env.jpg" content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."></Album>
  <Album url="env.jpg" content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."></Album>
  </AlbumWrapper>
  </A>
  </>;
}

export default App;
