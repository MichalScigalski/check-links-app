import { LinkProfileBoxContainer } from './LinkProfile.style'
import LinkIcon from '../../assets/img/link-icon.svg'

const LinkProfile = ({ link }) => {
    const { name, url } = link

    return (
        <LinkProfileBoxContainer target='_blank' href={url} title={url}>
            <img src={LinkIcon} alt='link-icon' />
            <h2>{name}</h2>
        </LinkProfileBoxContainer>
    )
}

export default LinkProfile