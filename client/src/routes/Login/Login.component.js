import { LoginContainer } from './Login.style'
import loginPicture from '../../assets/img/login-picture.svg'
import FormField from '../../components/FormField/FormField.component'
import Button from '../../components/Button/Button.component'
import { useNavigate } from 'react-router'
import { useContext, useState } from 'react'
import userService from '../../services/user.service'
import { colors } from '../../globalStyles'
import { AlertContext } from '../../context/Alert.context'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setAlertData} = useContext(AlertContext)
    const navigate = useNavigate()

    const LoginHandler = async (e) => {
        e.preventDefault()
        try {
            await userService.login(username, password)
            setAlertData({
                status: true,
                text: 'Loggin success',
                navigation: 0
            })
        } catch (err) {
            setAlertData({ status: false, text: err.response.data.message })
            setPassword('')
        }
    }


    return (
        <LoginContainer>
            <div>
                <form onSubmit={LoginHandler}>
                    <FormField
                        label={'Username'}
                        name={'username'}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder={'name'}
                        color={colors.green}
                        required
                    />
                    <FormField
                        label={'Password'}
                        name={'password'}
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={'**********'}
                        color={colors.green}
                        required
                    />
                    <Button bgColor={colors.green} value={'Login'} />
                    <p>
                        Not a member?{' '}
                        <span onClick={() => navigate('/register')}>
                            Sign up
                        </span>
                    </p>
                </form>
            </div>
            <img src={loginPicture} alt="login illustration" />
        </LoginContainer>
    )
}

export default Login
