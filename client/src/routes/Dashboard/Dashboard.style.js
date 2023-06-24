import styled from 'styled-components'
import { colors, shadows } from '../../globalStyles'

export const CreateProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
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
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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
    background-color: white;
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
    }

    button {
        width: max-content;
    }
`

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    gap: 1rem;
    max-height: 360px;
    overflow: auto;

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
        width: 8px;
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
        top: 15px;
        left: 15px;
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
