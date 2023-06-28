import styled from 'styled-components'
import { colors, shadows } from '../../globalStyles'

export const ProfileMenuContainer = styled.div`
    position: relative;
    flex-direction: column;
    width: 150px;
    color: #000;
`

export const ProfileButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    z-index: 1;
`

export const MenuSection = styled.span`
    color: ${colors.dark};
    font-size: 1.25rem;
    padding: 1rem 0;
`

export const ProfileImage = styled.div`
    img {
        border-radius: 50%;
        height: 40px;
    }
`

export const DropdownMenu = styled.div`
    top: -20px;
    padding-top: 2rem;
    gap: 4px;
    flex-direction: column;
    width: 100%;
    box-shadow: ${shadows.large};
    border-radius: 8px;
    background-color: #fff;
`

export const MenuItem = styled.div`
    cursor: pointer;
    padding: 10px 0;
    width: 100%;
    &:hover {
        background-color: ${colors.gray};
    }
`
