import styled from 'styled-components'
import { colors, shadows } from '../../globalStyles'

export const ConfirmDialogContainer = styled.dialog`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
    padding: 8px;
    border-radius: 8px;
    border: none;
    z-index: 2;
    box-shadow: ${shadows.large};
    background-color: ${colors.red};
    color: white;

    p {
        cursor: pointer;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        align-items: center;

        button {
            background-color: transparent;
            border: none;
            cursor: pointer;
            font-size: 1.25rem;
        }
    }
`
