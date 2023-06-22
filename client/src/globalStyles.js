import { createGlobalStyle } from 'styled-components'


export const green = '#49C98A',
    dark = '#1B2430',
    light = '#FBFBFB',
    purple = '#3D4DDE',
    yellow = '#FFC40A',
    fontCursive = "'Merienda', cursive"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Outfit', sans-serif;
        background: ${green};
    }
`

export default GlobalStyle