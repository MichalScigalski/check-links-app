import axios from 'axios'
import { LoginContainer } from './Login.style'
import loginPicture from '../../assets/img/login-picture.svg'
import FormField from '../../components/FormField/FormField.component'
import Button from '../../components/Button/Button.component'
import { useNavigate } from 'react-router'
import { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const LoginHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(process.env.REACT_APP_API_URL + '/user/login', {
                username,
                password
            })
            sessionStorage.setItem('token', res.data.token)
            alert('Login success')
            navigate('/')
            navigate(0)
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
                <p>Not a member? <span onClick={() => navigate('/register')}>Sign up</span></p>
            </div>
            <img src={loginPicture} alt="login illustration" />
        </LoginContainer>
    )
}

export default Login