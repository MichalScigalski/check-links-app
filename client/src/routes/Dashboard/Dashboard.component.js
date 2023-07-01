import { useEffect, useState } from 'react'
import {
    DashboardContainer,
    CreateProfileContainer,
    Container,
    LinksContainer,
    ColorField,
    ModalContainer,
} from './Dashboard.style'
import Button from '../../components/Button/Button.component'
import { useNavigate } from 'react-router'
import FormField from '../../components/FormField/FormField.component'
import LinkDashboard from '../../components/LinkDashboard/LinkDashboard.component'
import Modal from 'react-modal'
import profileService from '../../services/profile.service'
import Alert from '../../components/Alert/Alert.component'
import userService from '../../services/user.service'

const linkDefault = {
    name: '',
    url: '',
}

const newPasswordDefault = {
    password: '',
    newPassword: ''
}

const modalStyles = {
    overlay: {
        backdropFilter: 'blur(2px)',
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        padding: '5rem',
    },
}

const Dashboard = () => {
    const [profile, setProfile] = useState(null)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)
    const [newLink, setNewLink] = useState(linkDefault)
    const [editLink, setEditLink] = useState(linkDefault)
    const [newPassword, setNewPassword] = useState(newPasswordDefault)
    const [alertData, setAlertData] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        dashHandle()
    }, [])

    const dashHandle = async () => {
        try {
            const profile = await profileService.getDashboard()
            setProfile(profile)
        } catch (err) {
            setAlertData({ status: false, text: err.response.data.message })
        }
    }

    const createProfileHandler = async () => {
        try {
            await profileService.createProfile()
            setAlertData({
                status: true,
                text: 'Profile created',
                isRefresh: true,
            })
        } catch (err) {
            setAlertData({ status: false, text: err.response.data.message })
        }
    }

    const addLinkHandler = async (e) => {
        e.preventDefault()
        try {
            await profileService.addLink(newLink)
            setAlertData({ status: true, text: 'Link added', isRefresh: true })
        } catch (err) {
            setAlertData({ status: false, text: err.response.data.message })
        }
    }

    const updateHandler = async (e) => {
        e.preventDefault()
        try {
            await profileService.updateName(profile.displayName)
            await profileService.editBackgroundColor(profile.backgroundColor)
            setAlertData({ status: true, text: 'Data updated' })
        } catch (err) {
            setAlertData({ status: false, text: err.response.data.message })
        }
    }

    const editLinkHandler = async (e) => {
        e.preventDefault()
        try {
            await profileService.editLink(editLink)
            setAlertData({
                status: true,
                text: 'Link updated',
                isRefresh: true,
            })
        } catch (err) {
            setAlertData({ status: false, text: err.response.data.message })
        }
    }

    const changePasswordHandler = async (e) => {
        e.preventDefault()
        if (newPassword.password !== newPassword.passwordRepeat)
            return setAlertData({
                status: false,
                text: 'Passwords are different',
            })
        try {
            await userService.changePassword(newPassword.password)
            setAlertData({
                status: true,
                text: 'Password changed',
                isRefresh: true,
            })
        } catch (err) {
            setAlertData({ status: false, text: err.response.data.message })
        }
    }

    const closeAlertHandler = () => setAlertData(null)

    const openEditModal = (link) => {
        setEditLink(link)
        setIsEditModalOpen(true)
    }
    const closeEditModal = () => {
        setIsEditModalOpen(false)
        setEditLink(linkDefault)
    }

    const openPasswordModal = () => {
        setIsPasswordModalOpen(true)
    }

    const closePasswordModal = () => {
        setIsPasswordModalOpen(false)
        setNewPassword(newPasswordDefault)
    }

    return (
        <>
            {alertData && (
                <Alert alert={alertData} onClose={closeAlertHandler} />
            )}
            {profile ? (
                <DashboardContainer>
                    <Modal isOpen={isEditModalOpen} style={modalStyles}>
                        <ModalContainer>
                            <h1>Link editor.</h1>
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
                                    required
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
                                    required
                                />
                                <div>
                                    <Button value="Update" type="submit" />
                                    <Button
                                        value="Close"
                                        variant="outlined"
                                        onClick={closeEditModal}
                                    />
                                </div>
                            </form>
                        </ModalContainer>
                    </Modal>
                    <Modal isOpen={isPasswordModalOpen} style={modalStyles}>
                        <ModalContainer>
                            <h1>Change password.</h1>
                            <form onSubmit={changePasswordHandler}>
                                <FormField
                                    label="New password"
                                    placeholder="********"
                                    type="password"
                                    value={newPassword.password}
                                    onChange={(e) =>
                                        setNewPassword({
                                            ...newPassword,
                                            password: e.target.value,
                                        })
                                    }
                                    required
                                />
                                <FormField
                                    label="Repeat new password"
                                    type="password"
                                    placeholder="********"
                                    value={newPassword.passwordRepeat}
                                    onChange={(e) =>
                                        setNewPassword({
                                            ...newPassword,
                                            passwordRepeat: e.target.value,
                                        })
                                    }
                                    required
                                />
                                <div>
                                    <Button value="Save" type="submit" />
                                    <Button
                                        value="Close"
                                        variant="outlined"
                                        onClick={closePasswordModal}
                                    />
                                </div>
                            </form>
                        </ModalContainer>
                    </Modal>
                    <Container>
                        <h1>Profile.</h1>
                        <form onSubmit={updateHandler}>
                            <FormField
                                label="Display name"
                                value={profile.displayName}
                                onChange={(e) =>
                                    setProfile({
                                        ...profile,
                                        displayName: e.target.value,
                                    })
                                }
                            />
                            <ColorField>
                                <label htmlFor="Background color">
                                    Background profile color
                                </label>
                                <input
                                    label="Background color"
                                    value={profile.backgroundColor}
                                    type="color"
                                    onChange={(e) =>
                                        setProfile({
                                            ...profile,
                                            backgroundColor: e.target.value,
                                        })
                                    }
                                />
                            </ColorField>
                            <div>
                                <Button value="Save" type="submit" />
                                <Button
                                    value="Show my page"
                                    variant="outlined"
                                    onClick={() =>
                                        navigate(`/${profile.username}`)
                                    }
                                />
                            </div>
                        </form>
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
                                required
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
                                required
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
                        {profile.links.length > 0 ? (
                            <LinksContainer>
                                {profile.links.map((link, _id) => {
                                    return (
                                        <LinkDashboard
                                            key={_id}
                                            link={link}
                                            openModel={openEditModal}
                                        />
                                    )
                                })}
                            </LinksContainer>
                        ) : (
                            <h2>Empty</h2>
                        )}
                    </Container>

                    <Container>
                        <h1>Account.</h1>
                            <FormField
                                label="Username"
                                value={profile.username}
                                disabled
                                placeholder="username"
                            />
                            <Button
                                value="Change Password"
                                onClick={openPasswordModal}
                            />
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
