import styled from 'styled-components'
import { colors, shadows } from '../../globalStyles'

export const ConfirmDialogContainer = styled.dialog`
    display: flex;
    text-align: center;
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
`

export const ConfirmCancelButton = styled.span`
    cursor: pointer;
    margin-right: 8px;
    &::before {
        content: 'X';
    }
`
