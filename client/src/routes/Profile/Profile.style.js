import styled from 'styled-components'

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${({bgColor}) => bgColor };
    color: #FFF;
    border-radius: 8px;
    padding: 3rem;
    height: 100vh;
    margin: 1rem;

    h1 {
        font-size: 3rem;
        margin: 0;
    }

    span {
        margin-bottom: 1rem;
    }

    p {
        margin-top: 3rem;
    }
`

export const ProfileLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
`
