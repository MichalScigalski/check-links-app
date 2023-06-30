import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 2rem;
    height: 80vh;
    padding-top: 2rem;
`

export const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
`

export const CardsContainer = styled.div`
    display: flex;
    position: relative;

    div {
        height: 550px;
        transform: scale(0.8);
        border-radius: 2rem;

        &:nth-child(1) {
            transform: translateX(50%);
            z-index: 2;
        }
        &:nth-child(2) {
            opacity: 0.6;
        }
    }
`
