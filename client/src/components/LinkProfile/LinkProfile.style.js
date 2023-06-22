import styled from 'styled-components'

export const LinkProfileContainer = styled.a`
    display: flex;
    border-radius: 1rem;
    column-gap: 1rem;
    min-width: 250px;
    padding: 10px;
    color: #000;
    background-color: #f5f5f5;
    text-decoration: none;
    transition: color 100ms ease-in;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
            rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        img {
            background-color: ${({color}) => color};
        }
        color: ${({color}) => color};
    }

    img {
        height: 30px;
        width: auto;
        background-color: black;
        padding: 5px;
        border-radius: 50%;
        transition: background-color 100ms ease-in;
    }

    span {
        font-size: 1.5rem;
        margin: 0;
    }
`
