import {LoginContainer} from './Login.style'
import loginPicture from '../../assets/img/login-picture.svg'
import FormField from '../../components/FormField/FormField.component'
import Button from '../../components/Button/Button.component'

const Login = () => {
    return(
        <LoginContainer>
            <div>
                <form>
                    <FormField label={'Email address'} placeholder={'name@mail.com'} />
                    <FormField label={'Password'} placeholder={'**********'} />
                    <span>Forgot password?</span>
                    <Button $primary value={'Login'}/>
                </form>
                <p>Not a member? <span>Sign up</span></p>
            </div>
            <img src={loginPicture} alt="login picture" />
        </LoginContainer>
    )
}

export default Login