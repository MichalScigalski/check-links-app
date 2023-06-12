import styled from 'styled-components'

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #fff;
    border-radius: 8px;
    padding: 3rem;
    height: 70vh;
    margin: 1rem;
    
    h1 {
        margin: 2px;
    }

    span {
        margin-bottom: 1rem;
    }
`

export const ProfileLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`