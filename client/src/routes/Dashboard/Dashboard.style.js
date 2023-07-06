import styled from 'styled-components'
import { colors, shadows } from '../../globalStyles'

export const CreateProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 3rem;
    height: 70vh;
    margin: 1rem;

    div {
        display: flex;
        gap: 1rem;
    }
`

export const DashboardContainer = styled.div`
    margin: 2rem 10%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
`

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    border-radius: 8px;
    padding: 4rem 3rem;
    background-color: ${({theme}) => theme.main};
    box-shadow: ${shadows.medium};

    h1 {
        position: absolute;
        top: 15px;
        left: 15px;
        font-size: 1.5rem;
    }

    h2 {
        color: ${colors.gray};
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        div {
            button:nth-child(2) {
                margin-left: 1rem;
            }
        }
    }

    button {
        width: max-content;
    }

    &.links {
        padding: 4rem 2rem;
    }
`

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 320px;
    overflow: auto;
    padding-right: 4px;

    &:hover {
        &::-webkit-scrollbar {
            opacity: 1;
        }
    }

    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
        transform: scale(0);
        width: 4px;
        background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${colors.purple};
    }
`

export const ColorField = styled.div`
    display: flex;
    flex-direction: column;
    label {
        margin: 5px;
    }
    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 100px;
        height: 50px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`

export const ModalContainer = styled.div`
    h1 {
        position: absolute;
        top: 25px;
        left: 25px;
        font-size: 1.5rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        div {
            display: flex;
            gap: 4px;
        }
    }
`
