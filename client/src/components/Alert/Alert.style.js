import styled, { keyframes } from 'styled-components'
import { colors, shadows } from '../../globalStyles'

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const AlertContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    padding: 1rem 1.2rem;
    border-radius: 1rem;
    font-weight: bold;
    z-index: 99;
    position: fixed;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%);
    box-shadow: ${shadows.large};
    color: white;
    background-color: ${colors.dark};
    max-width: 350px;
    opacity: ${({ show }) => (show ? 1 : 0)};
    animation: ${({ show }) => show && fadeIn} 200ms ease-in;

    div {
        h1 {
            color: ${({ status }) => (status ? colors.green : colors.red)};
            font-size: 1.5rem;
        }
        h2 {
            font-size: 1rem;
            font-weight: 500;
        }
    }

    img:first-child {
        height: 40px;
        width: auto;
    }

    img:last-child {
        cursor: pointer;
    }
`
