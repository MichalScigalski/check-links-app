import axios from 'axios'
import { LoginContainer } from './Login.style'
import loginPicture from '../../assets/img/login-picture.svg'
import FormField from '../../components/FormField/FormField.component'
import Button from '../../components/Button/Button.component'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/User.Context'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const navigateHandler = (url) => navigate(url)
    const LoginHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(process.env.REACT_APP_API_URL + '/user/login', {
                username,
                password
            })
            localStorage.setItem('token', res.data.token)
            alert('Login success')
            setUser(res.data.user)
            navigateHandler('/')
        }
        catch (err) {
            alert(err.response.data.message)
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
                        placeholder={'name'} />
                    <FormField
                        label={'Password'}
                        name={'password'}
                        value={password}
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={'**********'} />
                    <span>Forgot password?</span>
                    <Button $primary value={'Login'} />
                </form>
                <p>Not a member? <span onClick={() => navigateHandler('/register')}>Sign up</span></p>
            </div>
            <img src={loginPicture} alt="login illustration" />
        </LoginContainer>
    )
}

export default Login