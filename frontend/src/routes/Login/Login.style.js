import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    column-gap: 2rem;
    padding: 10rem;
    margin: 5rem auto;
    background-color: #fff;
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
        p,span {
            font-size: 14px;
        }
        span {
            color: #066163;
            cursor: pointer;
        }
    }
`