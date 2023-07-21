import styled from 'styled-components'
import { ProfileContainer } from '../Profile/Profile.style'

export const HomeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;
`

export const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    h1 {
        font-size: 4rem;
        span {
            font-weight: 400;
        }
    }

    button {
        margin: 2rem 0;
        width: max-content;
        font-size: 1.75rem;
        padding: 1rem 2rem;
    }

    @media (max-width: 840px) {
        text-align: center;
        align-items: center;
        h1 {
            font-size: 2rem;
        }
        button {
            margin: 2rem 0;
            width: max-content;
            font-size: 1.25rem;
            padding: 0.5rem 1rem;
        }
    }
`

export const CardsContainer = styled.div`
    display: flex;
    @media (max-width: 840px) {
        margin-top: -5rem;
        transform: scale(0.7);
    }
    @media (max-width: 580px) {
        margin-top: -8rem;
        transform: scale(0.4);
    }
`

export const Card = styled.div`
    height: 550px;
    width: 410px;
    ${ProfileContainer} {
        height: 550px;
        div {
            transform: scale(0.8);
        }
        a:active {
            pointer-events: none;
        }
    }
    &:nth-child(1) {
        transform: translateX(20%);
        z-index: 2;
    }
    &:nth-child(2) {
        transform: translateX(-30%) scale(0.9);
        filter: blur(2px);
        opacity: 0.6;
    }
`
