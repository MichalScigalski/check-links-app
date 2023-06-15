import styled from "styled-components";
import * as config from "../../globalStyles";

export const LinkDashboardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #e0e0e0;
    border-radius: 8px;
    padding: 1rem 0;
`;

export const LinkDashboardData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    margin-left: 2rem;

    p {
        font-size: 20px;
        margin: 0;
    }

    a {
        color: white;
    }
`;

export const LinkDashboardButtons = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    button {
        border-radius: 50%;
        height: 30px;
        border: none;
        cursor: pointer;
        &:hover {
            filter: brightness(1.2);
        }
    }
`;
