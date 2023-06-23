import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 90vh;
    margin: 1rem;
    border-radius: 8px;
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
        margin: 2rem;
        width: max-content;
        transform: scale(1.3);
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
