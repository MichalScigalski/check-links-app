import styled from 'styled-components'
import { colors, shadows } from '../../globalStyles'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-evenly;
    z-index: 99;
    align-items: start;
    background-color: #FFF;
    padding: 1rem 0;
    box-shadow: ${shadows.small};
    height: 80px;
    h1 {
        color: ${colors.dark};
        font-size: 2.5rem;
        span {
            color: ${colors.green}
        }        
    }

    h3,h1 {
        cursor: pointer;
    }

    div {
        position: relative;
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
