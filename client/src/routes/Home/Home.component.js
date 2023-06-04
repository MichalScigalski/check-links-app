import axios from 'axios'
import { useContext } from "react"
import Button from "../../components/Button/Button.component"
import { HomeContainer } from "./Home.style"
import { ProfileContext } from "../../context/Profile.context"
import authService from "../../services/auth.service"
import { useNavigate } from 'react-router'

const Home = () => {
    const { profile, setProfile } = useContext(ProfileContext)
    const navigate = useNavigate()
    const createProfileHandler = async () => {

        try {
            console.log('Bearer ' + authService.getAuthToken())
            const res = await axios.post(process.env.REACT_APP_API_URL + '/profile/create', {}, {
                headers: {
                    Authorization: 'Bearer ' + authService.getAuthToken()
                }
            })
            if (res.data) {
                setProfile(authService.getCurrentUser())
                navigate('/myprofile')
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <HomeContainer>
            {profile ?
                <div>
                    <h1>Check Links!</h1>
                    <h2>Create your own custom page with social links ❤️</h2>
                    <Button $primary value={'Join now!'} />
                </div>
                :
                <div>
                    <h1>Getting started</h1>
                    <h2>Set up your profile right now</h2>
                    <Button value={'Create Profile'} onClick={createProfileHandler} />
                </div>
            }
        </HomeContainer>
    )
}

export default Home