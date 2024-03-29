import styled from 'styled-components'
import { colors, shadows } from '../../globalStyles'

export const ProfileMenuContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 160px;
    z-index: 3;
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
    width: 90%;
    word-wrap: break-word;
`

export const ProfileImage = styled.div`
    img {
        border-radius: 50%;
        height: 40px;
    }
`

export const DropdownMenu = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    text-align: center;
    padding-top: 3rem;
    gap: 4px;
    flex-direction: column;
    width: 100%;
    box-shadow: ${shadows.large};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.main};
`

export const MenuItem = styled.div`
    cursor: pointer;
    padding: 10px 0;

    width: 100%;
    &:hover {
        background-color: ${({ theme }) =>
            theme.isDark ? colors.purple : colors.gray};
    }
    &:last-child:hover {
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
    }
`
