import Button from '../../components/Button/Button.component'
import { colors } from '../../globalStyles'
import { HomeContainer, WelcomeContainer, CardsContainer, Card } from './Home.style'
import Profile from '../Profile/Profile.component'
import { useNavigate } from 'react-router'

const Home = ({ user }) => {
    const navigate = useNavigate()

    return (
        <HomeContainer>
            <WelcomeContainer>
                <h1>One place.</h1>
                <h1>
                    <span>Everything you</span> are.
                </h1>
                {user ? (
                    <Button
                        bgColor={colors.purple}
                        value={'Set up!'}
                        onClick={() => navigate('/dashboard')}
                    />
                ) : (
                    <Button
                        bgColor={colors.green}
                        value={'Get Started!'}
                        onClick={() => navigate('/login')}
                    />
                )}
            </WelcomeContainer>
            <CardsContainer>
                <Card>
                    <Profile homeView={'scigal'} />
                </Card>
                <Card>
                    <Profile homeView={'jedno'} />
                </Card>
            </CardsContainer>
        </HomeContainer>
    )
}

export default Home
