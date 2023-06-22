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
    const [link, setLink] = useState(linkDefault)
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
            await profileService.addLink(link)
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
            await profileService.editLink(link)
            navigate(0)
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    const openModal = (link) => {
        setLink(link)
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
        setLink(linkDefault)
    }

    return (
        <>
            {profile ? (
                <DashboardContainer>
                    <Modal isOpen={isModalOpen} style={modalStyles}>
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
                    <Container>
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
                    <LinksContainer>
                        {profile.links.length > 0 &&
                            profile.links.map((link, _id) => {
                                return (
                                    <LinkDashboard
                                        key={_id}
                                        link={link}
                                        openModel={openModal}
                                    />
                                )
                            })}
                    </LinksContainer>
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
