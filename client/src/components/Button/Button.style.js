import styled, { css } from 'styled-components'
import { colors } from '../../globalStyles'

const variantStyles = (variant = 'filled') => {
    if ((variant === 'outlined')) {
        return css`
            color: ${colors.purple};
            background-color: transparent;
            border-color: ${colors.purple};

            &:hover {
                background-color: ${colors.purple};
                border-color: transparent;
                color: white;
            }
        `
    } else {
        return css`
            background-color: ${colors.purple};
            border-color: transparent;

            &:hover {
                background-color: #253093;
            }
        `
    }
}

export const ButtonContainer = styled.button`
    padding: 10px 20px;
    border-radius: 1rem;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    border: 3px solid transparent;
    transition: color 100ms ease-in, background-color 100ms ease-in;

    ${({ variant }) => variantStyles(variant)}
`
