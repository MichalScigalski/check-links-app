import { createGlobalStyle } from "styled-components";

const green = '#066163',
    dark = '#1B2430',
    fontCursive = "'Merienda', cursive";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: ${green};
    }
`

export { green, dark, fontCursive }

export default GlobalStyle;