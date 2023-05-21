import React from "react";
import styled from "styled-components";

const Main = styled.p`
    text-align:center;
    font-size:40px;
    margin-top : 100px;
`

const Sup = styled.p`
    color: #6c757d;
    text-align:center;
    font-size:20px;
    margin-top:10px;
`

const Explanation = () => {
    return(
        <>
        <Main>Album example</Main>
        <Sup>Something short and leading about the collection below—its contents,<br/> the creator, etc. Make it short and sweet, but not too short so folks don’t<br/> simply skip over it entirely.</Sup>
        </>
    )
};

export default Explanation;