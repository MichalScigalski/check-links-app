import { useEffect, useState } from 'react'
import {
    DashboardContainer,
    CreateProfileContainer,
    Container,
    LinksContainer,
    ColorField,
} from './Dashboard.style'
import Button from '../../components/Button/Button.component'
import { useNavigate } from 'react-router'
import FormField from '../../components/FormField/FormField.component'
import LinkDashboard from '../../components/LinkDashboard/LinkDashboard.component'
import Modal from 'react-modal'
import profileService from '../../services/profile.service'
import { SwitchInput } from '../../components/SwitchToggle/SwitchToggle.style'

const linkDefault = {
    name: '',
    url: '',
}

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        padding: '4rem',
    },
}

const Dashboard = () => {
    const [profile, setProfile] = useState(null)
    const [displayName, setDisplayName] = useState('')
    const [backgroundColor, setBackgroundColor] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newLink, setNewLink] = useState(linkDefault)
    const [editLink, setEditLink] = useState(linkDefault)

    const navigate = useNavigate()

    useEffect(() => {
        dashHandle()
    }, [])

    const dashHandle = async () => {
        try {
            const profile = await profileService.getDashboard()
            setProfile(profile)
            setDisplayName(profile.displayName)
            setBackgroundColor(profile.backgroundColor)
        } catch (err) {
            console.log(err.response.data.message)
        }
    }

    const createProfileHandler = async () => {
        try {
            await profileService.createProfile()
            alert('Profile created')
            navigate(0)
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    const addLinkHandler = async (e) => {
        e.preventDefault()
        try {
            await profileService.addLink(newLink)
            alert('Link added')
            navigate(0)
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    const updateHandler = async (e) => {
        e.preventDefault()
        try {
            await profileService.updateName(displayName)
            await profileService.editBackgroundColor(backgroundColor)
            alert('Success')
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    const editLinkHandler = async (e) => {
        e.preventDefault(e)
        try {
            await profileService.editLink(editLink)
            navigate(0)
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    const openModal = (link) => {
        setEditLink(link)
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
        setEditLink(linkDefault)
    }

    return (
        <>
            {profile ? (
                <DashboardContainer>
                    <Modal isOpen={isModalOpen} style={modalStyles}>
                        <form onSubmit={editLinkHandler}>
                            <FormField
                                label="Name"
                                value={editLink.name}
                                onChange={(e) =>
                                    setEditLink({
                                        ...editLink,
                                        name: e.target.value,
                                    })
                                }
                                placeholder="Instagram"
                            />
                            <FormField
                                label="Url"
                                value={editLink.url}
                                onChange={(e) =>
                                    setEditLink({
                                        ...editLink,
                                        url: e.target.value,
                                    })
                                }
                                placeholder="http://instagram.com/user"
                            />
                            <Button $primary value="Update" type="submit" />
                            <Button value="Close" onClick={closeModal} />
                        </form>
                    </Modal>
                    <Container>
                        <h1>Profile.</h1>
                        <form onSubmit={updateHandler}>
                            <FormField
                                label="Display name"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                            />
                            <ColorField>
                                <label htmlFor="Background color">
                                    Background profile color
                                </label>
                                <input
                                    label="Background color"
                                    value={backgroundColor}
                                    type="color"
                                    onChange={(e) =>
                                        setBackgroundColor(e.target.value)
                                    }
                                />
                            </ColorField>
                            <Button value="Save" type="submit" />
                        </form>
                        <Button
                            value="Show my page"
                            variant="outlined"
                            onClick={() => navigate(`/${profile.username}`)}
                        />
                    </Container>
                    <Container>
                        <h1>Link creator.</h1>
                        <form onSubmit={addLinkHandler}>
                            <FormField
                                label="Name"
                                value={newLink.name}
                                onChange={(e) =>
                                    setNewLink({
                                        ...newLink,
                                        name: e.target.value,
                                    })
                                }
                                placeholder="Instagram"
                            />
                            <FormField
                                label="Url"
                                value={newLink.url}
                                onChange={(e) =>
                                    setNewLink({
                                        ...newLink,
                                        url: e.target.value,
                                    })
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
                    
                        <Container className="links">
                            <h1>Your links.</h1>
                            {profile.links.length > 0 ? 
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
                                </LinksContainer> :
                                <h2>Empty</h2>
                            }
                        </Container>
                    
                    <Container>
                        <h1>Account.</h1>
                        <form>
                            <FormField
                                label="Username"
                                value={profile.username}
                                disabled
                                placeholder="username"
                            />
                            <Button value="Change Password" />
                        </form>
                    </Container>
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
