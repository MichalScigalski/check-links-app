import styled, { css } from 'styled-components'
import { colors } from '../../globalStyles'

const variantStyles = (variant = 'filled', bgColor = colors.purple) => {
    if ((variant === 'outlined')) {
        return css`
            color: ${bgColor};
            background-color: transparent;
            border-color: ${bgColor};

            &:hover {
                background-color: ${bgColor};
                border-color: transparent;
                color: white;
            }
        `
    } else {
        return css`
            background-color: ${bgColor};
            border-color: transparent;

            &:hover {
                filter: brightness(1.2);
            }
        `
    }
}

export const ButtonContainer = styled.button`
    padding: 0.6rem 1.1rem;
    border-radius: 1rem;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    border: 4px solid transparent;
    transition: color 150ms ease-in, background-color 150ms ease-in, filter 150ms ease-in;

    ${({ variant, bgColor }) => variantStyles(variant, bgColor)}
`
