import styled from 'styled-components'
import {colors} from '../../globalStyles'

export const FormFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    label {
        margin: 5px;
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
            border-color: ${colors.purple};
            background-color: ${colors.light};
        }
    }
`
