import styled from 'styled-components'
import * as config from '../../globalStyles'

export const LinkProfileContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: left;
    border-radius: 12px;
    max-width: 400px;
    color: #fff;
    text-decoration: none;
    background-color: #f5f5f5;
    color: #000;
    transition: all 0.2s;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        img {
            background-color: ${config.green};
        }
        color: ${config.green};
    }

    img {
        height: 20px;
        width: auto;
        margin: 0.5rem 1rem;
        background-color: black;
        padding: 5px;
        border-radius: 50%;
    }

    span {
        margin: 0.5rem 1rem;
        font-size: 18px;
    }
`