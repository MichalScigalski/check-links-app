import styled from "styled-components";
import * as config from '../../globalStyles'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 2px solid ${config.dark};
    background-color: #fff;
    h1 {
        color: ${config.dark};
        font-family: ${config.fontCursive};
        cursor: pointer;

        &:hover {
            color: ${config.green};
        }
    }

    div {
        height: fit-content;
        display: flex;
        justify-content: center;
        column-gap: 10px;
    }
`