import { useEffect, useState } from 'react'
import { MyProfileContainer, MyProfileDashboard, Container, LinksContainer } from './MyProfile.style'
import axios from 'axios'
import authService from '../../services/auth.service'
import Button from '../../components/Button/Button.component'
import { useNavigate } from 'react-router'
import LinkProfile from '../../components/LinkProfile/LinkProfile.component'
import FormField from '../../components/FormField/FormField.component'

const MyProfile = () => {
    const [profile, setProfile] = useState(null)
    const [displayName, setDisplayName] = useState('')
    const [link, setLink] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        dashHandle()
    }, [])

    const dashHandle = async () => {
        try {
            const res = await axios.get(process.env.REACT_APP_API_URL + '/profile/dashboard', {
                headers: {
                    Authorization: 'Bearer ' + authService.getAuthToken()
                }
            })
            const data = res.data.profile
            setProfile(data)
            setDisplayName(data.displayName)
        } catch (err) {
            console.log(err.response.data.message)
        }
    }

    const createProfileHandler = async () => {
        try {
            const res = await axios.post(process.env.REACT_APP_API_URL + '/profile/create', {}, {
                headers: {
                    Authorization: 'Bearer ' + authService.getAuthToken()
                }
            })
            if (res.data) {
                alert('Profile created')
                navigate(0)
            }
        }
        catch (err) {
            alert(err.response.data.message)
        }
    }

    const addLinkHandler = async e => {
        e.preventDefault()
        try {
            const res = await axios.post(process.env.REACT_APP_API_URL + '/profile/add-link', {
                ...link
            }, {
                headers: {
                    Authorization: 'Bearer ' + authService.getAuthToken()
                },
            })
            if (res.data) {
                alert('Link added')
                console.log(res.data)
            }
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    return (
        <>
            {profile ?
                <MyProfileDashboard>
                    <Container>
                        <FormField
                            label='Display name'
                            value={displayName}
                            onChange={e => setDisplayName(e.target.value)} />
                        <Button value='Save' />
                    </Container>
                    <Container>
                        <form onSubmit={addLinkHandler}>
                            <FormField
                                label='Name'
                                value={link.name}
                                onChange={e => setLink({ ...link, name: e.target.value })}
                                placeholder='Instagram' />
                            <FormField
                                label='Url'
                                value={link.url}
                                onChange={e => setLink({ ...link, url: e.target.value })}
                                placeholder='http://instagram.com/user' />
                            <Button type='submit' $primary value='Create link' />
                        </form>
                    </Container>
                    <Container>
                        <Button
                            value='Show my Profile'
                            onClick={() => navigate(`/${profile.username}`)}
                        />
                    </Container>
                    {profile.links.length &&
                        <LinksContainer>
                            {profile.links.map((link, _id) => <LinkProfile key={_id} link={link} />)}
                        </LinksContainer>
                    }
                </MyProfileDashboard>
                :
                <MyProfileContainer>
                    <Button value='Create profile' onClick={createProfileHandler} />
                </MyProfileContainer>
            }
        </>
    )
}

export default MyProfile