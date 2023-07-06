import styled, { keyframes } from 'styled-components'
import { colors } from '../../globalStyles'

export const spinAnimation = keyframes`
    0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }
`

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 10%;
`

export const LoaderSpinner = styled.div`
    border: 4px solid #f3f3f3;
    border-top: 4px solid ${colors.green};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spinAnimation} 1.2s linear infinite;
`
