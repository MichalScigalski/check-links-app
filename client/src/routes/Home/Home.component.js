import Button from "../../components/Button/Button.component"
import { HomeContainer } from "./Home.style"
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/User.Context'
import authService from "../../services/auth.service"

const Home = () => {
    const { setUser } = useContext(UserContext)

    useEffect(() => {
        const user = authService.getCurrentUser()
        if (user)
            setUser(user)
    }, [])

    return (
        <HomeContainer>
            <div>
                <h1>Check Links!</h1>
                <h2>Create your own custom page with social links ❤️</h2>
                <Button $primary value={'Join now!'} />
            </div>
        </HomeContainer>
    )
}

export default Home