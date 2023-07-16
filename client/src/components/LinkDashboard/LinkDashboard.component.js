import { useNavigate } from 'react-router'
import profileService from '../../services/profile.service'
import {
    LinkDashboardContainer,
    LinkDashboardData,
    LinkDashboardButtons,
} from './LinkDashboard.style'
import SwitchToggle from '../SwitchToggle/SwitchToggle.component'
import { useState } from 'react'
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog.component'

const LinkDashboard = ({ link, openModel }) => {
    const { name, url, isVisible, _id } = link
    const [isChecked, setIsChecked] = useState(isVisible)
    const [isConfirm, setIsConfirm] = useState(false)

    const navigate = useNavigate()

    const deleteLinkHandler = () => {
        try {
            profileService.deleteLink(_id)
            navigate(0)
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    const isVisibleToggleHandler = () => {
        try {
            profileService.toggleVisibilityLink(_id)
            setIsChecked(!isChecked)
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    return (
        <LinkDashboardContainer status={isChecked}>
            <LinkDashboardData>
                <p>{name}</p>
                <a href={url} rel="noreferrer" target="_blank">
                    {url}
                </a>
            </LinkDashboardData>
            <LinkDashboardButtons>
                <button onClick={() => openModel(link)}>🖊️</button>
                <button onClick={() => setIsConfirm(true)}>🗑️ </button>

                <SwitchToggle
                    checked={isChecked}
                    onChange={isVisibleToggleHandler}
                />
            </LinkDashboardButtons>

            {isConfirm && (
                <ConfirmDialog
                    setIsOpen={setIsConfirm}
                    message="Are you sure u want to remove?"
                    onConfirm={deleteLinkHandler}
                />
            )}
        </LinkDashboardContainer>
    )
}

export default LinkDashboard
