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
    padding: 10px 20px;
    border-radius: 1rem;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    border: 3px solid transparent;
    transition: color 100ms ease-in, background-color 100ms ease-in, filter 100ms ease-in;

    ${({ variant, bgColor }) => variantStyles(variant, bgColor)}
`
