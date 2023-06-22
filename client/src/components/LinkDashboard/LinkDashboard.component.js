import { useNavigate } from 'react-router'
import profileService from '../../services/profile.service'
import {
    LinkDashboardContainer,
    LinkDashboardData,
    LinkDashboardButtons,
} from './LinkDashboard.style'
import SwitchToggle from '../SwitchToggle/SwitchToggle.component'
import { useState } from 'react'

const LinkDashboard = ({ link, openModel }) => {
    const { name, url, isVisible, _id } = link
    const [ isChecked, setIsChecked ] = useState(isVisible)
    const navigate = useNavigate()

    const deleteLinkHandler = () => {
        if (window.confirm(`Are you sure u want to remove ${name}?`)) {
            try {
                profileService.deleteLink(_id)
                navigate(0)
            } catch (err) {
                alert(err.response.data.message)
            }
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
                <button onClick={deleteLinkHandler}>🗑️</button>
                <SwitchToggle checked={isChecked} onChange={isVisibleToggleHandler} />
            </LinkDashboardButtons>
        </LinkDashboardContainer>
    )
}

export default LinkDashboard
