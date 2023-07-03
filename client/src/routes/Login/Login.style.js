import styled from 'styled-components'
import {colors} from '../../globalStyles'

export const LoginContainer = styled.div`
    display: flex;
    align-items: stretch;
    gap: 1rem;
    justify-content: center;
    padding-top: 2rem;
    margin: 5rem auto;

    @media (max-width: 768px) {
        img {
            display: none;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        form {
            gap: 1rem;
            display: flex;
            flex-direction: column;
            input {
                max-width: 400px;
            }
        }
        p,
        span {
            font-size: 14px;
        }
        span {
            color: ${colors.green};
            cursor: pointer;
        }
    }
`
