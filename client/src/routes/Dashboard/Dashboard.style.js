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
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

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
    grid-template-columns: 1fr;
    gap: 1rem;
    background-color: #FFF;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    overflow-y: scroll;
    height: 400px;
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
