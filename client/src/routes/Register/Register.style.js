import styled from 'styled-components'
import * as config from '../../globalStyles'

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const RegisterContainer = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    padding: 10rem 1rem;
    margin: 5rem auto;
    background-color: #fff;

    @media (max-width: 768px) {
        img {
            display: none;
        }
    }

    p {
        font-size: 14px;

        span {
            color: ${config.green};
            cursor: pointer;
        }
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
