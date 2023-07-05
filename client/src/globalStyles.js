import { createGlobalStyle } from 'styled-components'

export const colors = {
    yellow: '#FFC40A',
    green: '#49C98A',
    purple: '#3D4DDE',
    red: '#FE6152',
    light: '#FBFBFB',
    gray: '#EDEDED',
    dark: '#1B2430',
}

export const shadows = {
    small: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    medium: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    large: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
}

export const lightMode = {
    body: colors.light,
    text: '#000',
    main: '#FFF',
}
export const darkMode = {
    body: colors.dark,
    text: '#FFF',
    main: '#2b3a4d',
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Outfit', sans-serif;
        background: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        transition: background 200ms ease-in, color 200ms ease-in;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle
