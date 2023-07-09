import styled from 'styled-components'
import { colors } from '../../globalStyles'

export const LinkDashboardContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    background-color: ${colors.gray};
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

    p,
    a {
        margin: 0;
        color: ${colors.dark};
    }
    p {
        font-weight: 700;
        margin-bottom: 4px;
    }
`

export const LinkDashboardButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    button {
        height: 30px;
        border: none;
        cursor: pointer;
        background: transparent;
    }
`
