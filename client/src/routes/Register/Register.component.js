import { RegisterContainer, FormContainer } from './Register.style'
import RegisterPicture from '../../assets/img/login-picture.svg'
import FormField from '../../components/FormField/FormField.component'
import Button from '../../components/Button/Button.component'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import userService from '../../services/user.service'
import { colors } from '../../globalStyles'

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const navigate = useNavigate()

    const registerHandler = async (e) => {
        e.preventDefault()
        if (password !== passwordRepeat) {
            setPassword('')
            setPasswordRepeat('')
            return alert('Passwords are different!')
        }
        try {
            await userService.register(username, password)
            alert('Register success, now you can login')
            navigate('/login')
        } catch (err) {
            alert(err.response.data.message)
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
                    />
                    <FormField
                        label={'Password'}
                        placeholder={'**********'}
                        type={'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        color={colors.green}
                    />
                    <FormField
                        label={'Repeat password'}
                        placeholder={'**********'}
                        type={'password'}
                        value={passwordRepeat}
                        onChange={(e) => setPasswordRepeat(e.target.value)}
                        color={colors.green}
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
