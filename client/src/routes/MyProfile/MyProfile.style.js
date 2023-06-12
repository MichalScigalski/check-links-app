import styled from 'styled-components'

export const MyProfileContainer = styled.div`
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

export const MyProfileDashboard = styled.div`
    margin: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    grid-gap: 1rem;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 8px;
    padding: 2rem;

    input {
        margin-bottom: 1rem;
    }
`