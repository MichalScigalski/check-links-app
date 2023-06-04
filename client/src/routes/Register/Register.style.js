import styled from "styled-components";
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
    column-gap: 2rem;
    padding: 10rem;
    margin: 5rem auto;
    background-color: #fff;

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