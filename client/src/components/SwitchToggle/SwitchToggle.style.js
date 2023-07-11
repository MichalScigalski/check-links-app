import styled from 'styled-components'
import { colors } from '../../globalStyles'

export const SwitchContainer = styled.label`
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
`

export const SwitchInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`

export const SwitchSlider = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 20px;
    transition: 200ms;
    cursor: pointer;

    &:before {
        position: absolute;
        content: '';
        height: 16px;
        width: 16px;
        border-radius: 50%;
        transition: 200ms;
        
        ${({isThemeSwitch}) => !isThemeSwitch ? (
            'background-color: #FFF; bottom: 2px; left: 2px;'
        ):
            'bottom: 6px;'
        }

        content: '${({ isThemeSwitch, checked }) =>
            isThemeSwitch && (checked ? "🌒" : "☀️")}';
        ${({ isThemeSwitch, checked }) =>
            isThemeSwitch && (checked ? 'right: 25px' : 'left: 0')};
    }
`

export const SwitchInputChecked = styled(SwitchInput)`
    &:checked + ${SwitchSlider} {
        background-color: ${colors.green};
    }

    &:checked + ${SwitchSlider}:before {
        transform: translateX(20px);
    }
`
