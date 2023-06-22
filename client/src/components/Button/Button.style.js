import styled, { css } from 'styled-components'
import { colors } from '../../globalStyles'

const variantStyles = (variant = 'filled') => {
    if ((variant === 'outlined')) {
        return css`
            color: ${colors.yellow};
            background-color: transparent;
            border-color: ${colors.yellow};

            &:hover {
                background-color: ${colors.yellow};
                border-color: transparent;
                color: white;
            }
        `
    } else {
        return css`
            background-color: ${colors.yellow};
            border-color: transparent;

            &:hover {
                color: ${colors.yellow};
            background-color: transparent;
            border-color: ${colors.yellow};
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
    transition: color 200ms ease-in, background-color 200ms ease-in;

    ${({ variant }) => variantStyles(variant)}
`
