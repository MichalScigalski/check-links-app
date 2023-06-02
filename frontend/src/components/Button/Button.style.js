import styled from "styled-components";
import * as config from '../../globalStyles'


export const ButtonContainer = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${props => props.$primary ? config.dark : '#fff'};
    color: ${props => props.$primary ? '#fff' : config.dark};
    border: 2px solid ${config.dark};
`