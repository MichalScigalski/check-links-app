import styled from 'styled-components'

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
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 1rem;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 8px;
    padding: 2rem;

    input {
        margin-bottom: 1rem;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: left;

        button {
            margin: 10px 0;
        }
    }
`

export const LinksContainer = styled.div`
    display: grid;
    border-radius: 8px;
    padding: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem 4rem;
    background-color: white;
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
