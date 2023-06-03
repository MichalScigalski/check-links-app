import { HeaderContainer } from './Header.style'
import Button from '../Button/Button.component'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { UserContext } from '../../context/User.Context'

const Header = () => {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const NavigateHandler = (url) => navigate(url)
    const LogoutHandler = () => setUser(null)
    
    return (
        <HeaderContainer>
            <h1 onClick={() => NavigateHandler('/')}>CheckLinks</h1>
            {user ?
                <div>
                    <h3>{user.username}</h3>
                    <Button value='Logout' onClick={LogoutHandler}/>
                </div>
                :
                <div>
                    <Button value={'Login'} onClick={() => NavigateHandler('/login')} $primary />
                    <Button value={'Donate'} onClick={() => NavigateHandler('/donate')} />
                </div>
            }
        </HeaderContainer>
    )
}

export default Header