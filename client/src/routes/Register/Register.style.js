import styled from 'styled-components'
import { colors } from '../../globalStyles'

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const RegisterContainer = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    margin: 5rem auto;
    gap: 1rem;
    padding-top: 2rem;

    @media (max-width: 768px) {
        & > img {
            display: none;
        }
    }

    p {
        font-size: 14px;

        span {
            color: ${colors.green};
            cursor: pointer;
        }
    }

    div {
        display: flex;
        flex-direction: column;
    }

    form {
        gap: 1rem;
        display: flex;
        flex-direction: column;
        input {
            max-width: 400px;
        }
        section {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
        }
    }
`
