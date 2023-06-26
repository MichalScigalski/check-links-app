import { HeaderContainer } from './Header.style'
import Button from '../Button/Button.component'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { UserContext } from '../../context/User.context'
import userService from '../../services/user.service'

const Header = () => {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const logoutHandler = () => {
        navigate(0,'/')
        setUser(null)
        userService.logout()
    }

    return (
        <HeaderContainer>
            <h1 onClick={() => navigate('/')}>CheckLinks</h1>
            {user ? (
                <div>
                    <h3 onClick={() => navigate('/dashboard')}>
                        {user.username}
                    </h3>
                    <Button value="Logout" onClick={logoutHandler} />
                </div>
            ) : (
                <div>
                    <Button
                        variant='outlined'
                        value={'Login'}
                        onClick={() => navigate('/login')}
                        $primary
                    />
                    <Button
                        value={'Donate'}
                        variant='filled'
                        onClick={() => navigate('/donate')}
                    />
                </div>
            )}
        </HeaderContainer>
    )
}

export default Header
