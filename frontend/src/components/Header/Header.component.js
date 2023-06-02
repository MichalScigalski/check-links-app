import { HeaderContainer } from './Header.style'
import Button from '../Button/Button.component'
import { Navigate, useNavigate } from 'react-router'

const Header = () => {
    const navigate = useNavigate()
    const goHomePageHandler = () => {
        navigate('/')
    }

    return(
        <HeaderContainer>
            <h1 onClick={goHomePageHandler}>CheckLinks</h1>
            <div>
                <Button value={'Login'} $primary />
                <Button value={'Donate' }/>
            </div>
        </HeaderContainer>
    )
}

export default Header