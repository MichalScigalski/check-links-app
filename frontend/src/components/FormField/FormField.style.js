import styled from "styled-components";

export const FormFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    label {
        margin: 5px;
    }
    input {
        border: 1px solid #cccccc;
        border-radius: 4px;
        padding: 0.7rem 1rem;

        ::placeholder{
            color: #cccccc;
        }
        :focus{
            outline: none;
            border: 1px solid #066163;
        }
    }
`