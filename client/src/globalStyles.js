import { createGlobalStyle } from 'styled-components'

export const colors = {
    yellow: '#FFC40A',
    green: '#49C98A',
    purple: '#3D4DDE',
    light: '#FBFBFB',
    gray: '#EDEDED',
    dark: '#1B2430'
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
    }
`

export default GlobalStyle
