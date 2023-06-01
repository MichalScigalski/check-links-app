import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${props => props.$primary ? '#1B2430' : '#fff'};
    color: ${props => props.$primary ? '#fff' : '#1B2430'};
    border: 2px solid #1B2430;
`