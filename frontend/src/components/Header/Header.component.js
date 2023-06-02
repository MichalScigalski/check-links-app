import { HeaderContainer } from './Header.style'
import Button from '../Button/Button.component'
import { useNavigate } from 'react-router'

const Header = () => {
    const navigate = useNavigate()

    const navigateHandler = (url) => navigate(url)

    return(
        <HeaderContainer>
            <h1 onClick={() => navigateHandler('/')}>CheckLinks</h1>
            <div>
                <Button value={'Login'} onClick={() => navigateHandler('/login')} $primary />
                <Button value={'Donate'} onClick={() => navigateHandler('/donate')}/>
            </div>
        </HeaderContainer>
    )
}

export default Header