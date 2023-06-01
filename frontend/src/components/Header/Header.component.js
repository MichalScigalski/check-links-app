import { HeaderContainer } from './Header.style'
import Button from '../Button/Button.component'

const Header = () => {
    return(
        <HeaderContainer>
            <h1>CheckLinks</h1>
            <div>
                <Button value={'Login'} $primary />
                <Button value={'Donate' }/>
            </div>
        </HeaderContainer>
    )
}

export default Header