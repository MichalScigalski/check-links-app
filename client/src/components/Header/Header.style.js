import styled from 'styled-components'
import { colors, shadows } from '../../globalStyles'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-evenly;
    z-index: 99;
    align-items: center;
    row-gap: 8px;
    background-color: #fff;
    padding: 1rem 0;
    box-shadow: ${shadows.small};
    height: 80px;
    h1 {
        color: ${colors.dark};
        font-size: 2.5rem;
        margin-left: 1rem;
        span {
            color: ${colors.green};
        }
    }

    h3,
    h1 {
        cursor: pointer;
    }

    @media (max-width: 376px) {
        flex-direction: column;
        padding: 4rem 0;
    }
`
