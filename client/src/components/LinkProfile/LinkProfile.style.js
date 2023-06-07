import styled from 'styled-components'
import * as config from '../../globalStyles'

export const LinkProfileBoxContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    border-radius: 12px;
    color: #fff;
    text-decoration: none;
    background-color: ${config.green};
    transition: all 0.2s;

    &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }

    img {
        height: 40px;
        width: auto;
        margin: 8px 1rem;
    }

    h2 {
        margin: 8px 1rem;
    }
`