import styled from 'styled-components'

export const LinkDashboardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    background-color: #EDEDED;
    padding: 14px;
    max-width: 340px;
    max-height: 100px;
    opacity: ${({ status }) => (status ? '1' : '0.5')};
`

export const LinkDashboardData = styled.div`
    max-width: 50%;
    max-height: 60px;
    word-wrap: break-word;
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    p,a {
        color: #959595;
        margin: 0;
    }
    p {
        font-weight: 700;
        margin-bottom: 4px;
    }
`

export const LinkDashboardButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    button {
        border-radius: 50%;
        height: 30px;
        border: none;
        cursor: pointer;
        &:hover {
            filter: brightness(1.2);
        }
    }
`
