import Button from "../../components/Button/Button.component"
import { HomeContainer } from "./Home.style"

const Home = () => {
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