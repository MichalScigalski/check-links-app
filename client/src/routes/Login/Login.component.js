import { LoginContainer } from './Login.style'
import loginPicture from '../../assets/img/login-picture.svg'
import FormField from '../../components/FormField/FormField.component'
import Button from '../../components/Button/Button.component'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import userService from '../../services/user.service'
import { colors } from '../../globalStyles'
import Alert from '../../components/Alert/Alert.component'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alertData, setAlertData] = useState(null)
    const navigate = useNavigate()

    const LoginHandler = async (e) => {
        e.preventDefault()
        try {
            await userService.login(username, password)
            setAlertData({
                status: true,
                text: 'Loggin success',
                redirect: 0,
            })
        } catch (err) {
            setAlertData({ status: false, text: err.response.data.message })
            setPassword('')
        }
    }

    const closeAlertHandler = () => setAlertData(null)

    return (
        <>
            {alertData && (
                <Alert alert={alertData} onClose={closeAlertHandler} />
            )}
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
                        />
                        <FormField
                            label={'Password'}
                            name={'password'}
                            value={password}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={'**********'}
                            color={colors.green}
                        />
                        <span>Forgot password?</span>
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
        </>
    )
}

export default Login
