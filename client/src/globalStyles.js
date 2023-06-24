import { createGlobalStyle } from 'styled-components'

export const colors = {
    yellow: '#FFC40A',
    green: '#49C98A',
    purple: '#3D4DDE',
    light: '#FBFBFB',
    gray: '#EDEDED',
    dark: '#1B2430'
}

export const shadows = {
    small: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    medium: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    large: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Outfit', sans-serif;
        background: ${colors.light};
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle
