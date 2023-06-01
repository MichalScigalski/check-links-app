import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 2px solid #1B2430;
    background-color: #fff;
    h1 {
        color: #1B2430;
        font-family: 'Merienda', cursive;
    }

    div {

        height: fit-content;
        display: flex;
        justify-content: center;
        column-gap: 10px;
    }
`