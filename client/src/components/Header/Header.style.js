import styled from 'styled-components'
import colors from '../../globalStyles'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 10vh;
    background-color: #fff;
    h1 {
        color: ${colors.dark};
        font-family: 'Merienda', cursive;
        cursor: pointer;

        &:hover {
            color: ${colors.green};
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
