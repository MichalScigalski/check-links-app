import styled from 'styled-components'
import { colors, shadows } from '../../globalStyles'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-evenly;
    z-index: 99;
    align-items: center;
    row-gap: 8px;
    padding: 1rem 0;
    background: ${({ theme }) => theme.main};
    box-shadow: ${shadows.small};
    height: 80px;
    h1 {
        color: ${({ theme }) => theme.text};
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

    @media (max-width: 485px) {
        flex-direction: column;
        padding: 4rem 0;
    }
`

export const HeaderSection = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;

        span {
            color: ${colors.green};
        }
    }
`

export const ThemeButton = styled.button`
    position: absolute;
    right: 20px;
    top: 20px;
    border: none;
    background: transparent;
    cursor: pointer;

    img {
        height: 40px;
    }
`
