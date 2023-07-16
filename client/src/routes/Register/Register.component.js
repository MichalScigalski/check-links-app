import { RegisterContainer, FormContainer } from './Register.style'
import RegisterPicture from '../../assets/img/login-picture.svg'
import FormField from '../../components/FormField/FormField.component'
import Button from '../../components/Button/Button.component'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import userService from '../../services/user.service'
import { colors } from '../../globalStyles'
import { AlertContext } from '../../context/Alert.context'

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const { setAlertData } = useContext(AlertContext)

    const navigate = useNavigate()

    const registerHandler = async (e) => {
        e.preventDefault()
        if (password !== passwordRepeat) {
            setPassword('')
            setPasswordRepeat('')
            setAlertData({ status: false, text: 'Passwords are different' })
            return
        }
        try {
            await userService.register(username, password)
            await userService.login(username, password)
            setAlertData({
                status: true,
                text: 'Register success',
                navigation: 0,
            })
        } catch (err) {
            setAlertData({ status: false, text: err.response.data.message })
        }
    }

    return (
        <RegisterContainer>
            <FormContainer>
                <form onSubmit={registerHandler}>
                    <FormField
                        label={'Username'}
                        placeholder={'username'}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        color={colors.green}
                        required
                    />
                    <FormField
                        label={'Password'}
                        placeholder={'**********'}
                        type={'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        color={colors.green}
                        required
                    />
                    <FormField
                        label={'Repeat password'}
                        placeholder={'**********'}
                        type={'password'}
                        value={passwordRepeat}
                        onChange={(e) => setPasswordRepeat(e.target.value)}
                        color={colors.green}
                        required
                    />
                    <section>
                        <input required type="checkbox" />
                        <span>
                            I have read and agree to the "Terms Of Services"
                        </span>
                    </section>
                    <Button bgColor={colors.green} value={'Register'} />
                    <p>
                        I already have an account,{' '}
                        <span onClick={() => navigate('/login')}>Login In</span>
                    </p>
                </form>
            </FormContainer>
            <img src={RegisterPicture} alt="register illustration" />
        </RegisterContainer>
    )
}

export default Register
