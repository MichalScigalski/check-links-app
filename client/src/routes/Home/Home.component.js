import Button from '../../components/Button/Button.component'
import { colors } from '../../globalStyles'
import { HomeContainer, WelcomeContainer, CardsContainer } from './Home.style'
import Profile from '../Profile/Profile.component'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate()

    return (
        <HomeContainer>
            <WelcomeContainer>
                <h1>One place.</h1>
                <h1>
                    <span>Everything you</span> are.
                </h1>
                <Button
                    bgColor={colors.green}
                    value={'Get Started!'}
                    onClick={() => navigate('/login')}
                />
            </WelcomeContainer>
            <CardsContainer>
                <Profile homeView={'robert'} />
                <Profile homeView={'jedno'} />
            </CardsContainer>
        </HomeContainer>
    )
}

export default Home
