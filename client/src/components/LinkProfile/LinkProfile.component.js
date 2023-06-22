import { LinkProfileContainer } from './LinkProfile.style'
import LinkIcon from '../../assets/img/link-icon.svg'

const LinkProfile = ({ link, color }) => {
    const { name, url } = link

    return (
        <LinkProfileContainer
            color={color}
            target="_blank"
            href={url}
            title={url}
        >
            <img src={LinkIcon} alt="link-icon" />
            <span>{name}</span>
        </LinkProfileContainer>
    )
}

export default LinkProfile
