import styled from 'styled-components'
import * as config from '../../globalStyles'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #fff;
    h1 {
        color: ${config.dark};
        font-family: ${config.fontCursive};
        cursor: pointer;

        &:hover {
            color: ${config.green};
        }
    }
    h3 {
        cursor: pointer;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 10px;
    }
    @media (max-width: 376px) {
        flex-direction: column;
        padding-bottom: 1.5rem;
    }
`
