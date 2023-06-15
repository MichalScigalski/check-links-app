import { useEffect, useState } from 'react'
import {
    DashboardContainer,
    CreateProfileContainer,
    Container,
    LinksContainer,
} from './Dashboard.style'
import axios from 'axios'
import authService from '../../services/auth.service'
import Button from '../../components/Button/Button.component'
import { useNavigate } from 'react-router'
import FormField from '../../components/FormField/FormField.component'
import LinkDashboard from '../../components/LinkDashboard/LinkDashboard.component'
import Modal from 'react-modal'

const Dashboard = () => {
    const [profile, setProfile] = useState(null)
    const [displayName, setDisplayName] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [link, setLink] = useState({ name: '', url: '' })
    const navigate = useNavigate()

    useEffect(() => {
        dashHandle()
    }, [])

    const dashHandle = async () => {
        try {
            const res = await axios.get(
                process.env.REACT_APP_API_URL + '/profile/dashboard',
                {
                    headers: {
                        Authorization: 'Bearer ' + authService.getAuthToken(),
                    },
                }
            )
            const data = res.data.profile
            setProfile(data)
            setDisplayName(data.displayName)
        } catch (err) {
            console.log(err.response.data.message)
        }
    }

    const createProfileHandler = async () => {
        try {
            const res = await axios.post(
                process.env.REACT_APP_API_URL + '/profile/create',
                {},
                {
                    headers: {
                        Authorization: 'Bearer ' + authService.getAuthToken(),
                    },
                }
            )
            if (res.data) {
                alert('Profile created')
                navigate(0)
            }
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    const addLinkHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(
                process.env.REACT_APP_API_URL + '/profile/add-link',
                {
                    ...link,
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + authService.getAuthToken(),
                    },
                }
            )
            if (res.data) alert('Link added')
            navigate(0)
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    const updateDisplayNameHandler = async (e) => {
        e.preventDefault()
        try {
            await axios.put(
                process.env.REACT_APP_API_URL + '/profile/edit-name',
                {
                    displayName,
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + authService.getAuthToken(),
                    },
                }
            )
            alert('Name updated')
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    const editLinkHandler = async (e) => {
        e.preventDefault(e)
        try {
            await axios.put(
                process.env.REACT_APP_API_URL + '/profile/edit-link',
                {
                    ...link,
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + authService.getAuthToken(),
                    },
                }
            )
            alert('Link updated')
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <>
            <Modal isOpen={isModalOpen}>
                <form onSubmit={editLinkHandler}>
                    <FormField
                        label="Name"
                        value={link.name}
                        onChange={(e) =>
                            setLink({ ...link, name: e.target.value })
                        }
                        placeholder="Instagram"
                    />
                    <FormField
                        label="Url"
                        value={link.url}
                        onChange={(e) =>
                            setLink({ ...link, url: e.target.value })
                        }
                        placeholder="http://instagram.com/user"
                    />
                    <Button $primary value="Update" type="submit" />
                    <Button value="Close" onClick={closeModal} />
                </form>
            </Modal>
            {profile ? (
                <DashboardContainer>
                    <Container>
                        <form onSubmit={updateDisplayNameHandler}>
                            <FormField
                                label="Display name"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                            />
                            <Button $primary value="Save" type="submit" />
                        </form>
                        <Button
                            value="Show my page"
                            onClick={() => navigate(`/${profile.username}`)}
                        />
                    </Container>
                    <Container>
                        <form onSubmit={addLinkHandler}>
                            <FormField
                                label="Name"
                                value={link.name}
                                onChange={(e) =>
                                    setLink({ ...link, name: e.target.value })
                                }
                                placeholder="Instagram"
                            />
                            <FormField
                                label="Url"
                                value={link.url}
                                onChange={(e) =>
                                    setLink({ ...link, url: e.target.value })
                                }
                                placeholder="http://instagram.com/user"
                            />
                            <Button
                                type="submit"
                                $primary
                                value="Create link"
                            />
                        </form>
                    </Container>
                    {profile.links.length && (
                        <LinksContainer>
                            {profile.links.map((link, _id) => {
                                return (
                                    <LinkDashboard
                                        key={_id}
                                        link={link}
                                        openModel={openModal}
                                    />
                                )
                            })}
                        </LinksContainer>
                    )}
                </DashboardContainer>
            ) : (
                <CreateProfileContainer>
                    <Button
                        value="Create profile"
                        onClick={createProfileHandler}
                    />
                </CreateProfileContainer>
            )}
        </>
    )
}

export default Dashboard
