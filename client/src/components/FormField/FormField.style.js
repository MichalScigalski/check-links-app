import styled from 'styled-components'
import { colors } from '../../globalStyles'

export const FormFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    label {
        margin: 5px;
    }
    div {
        position: relative;
        input {
            padding-right: 2rem;
        }
    }
    input {
        background-color: ${colors.gray};
        border: 2px solid transparent;
        border-radius: 1rem;
        padding: 12px;
        transition: border 200ms ease-in-out;
        font-size: 1rem;

        ::placeholder {
            color: #ababab;
            line-height: 30px;
        }
        :focus {
            outline: none;
            border-color: ${({ color }) => color || colors.purple};
            background-color: ${colors.light};
        }
    }
`

export const ShowPasswordButton = styled.button`
    position: absolute;
    right: 10px;
    top: 15px;
    border: none;
    cursor: pointer;
    background: transparent;

    img {
        height: 15px;
        opacity: 0.5;
    }
`
