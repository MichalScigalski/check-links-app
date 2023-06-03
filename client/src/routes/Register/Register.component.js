import axios from 'axios'
import { RegisterContainer, FormContainer } from './Register.style'
import RegisterPicture from '../../assets/img/login-picture.svg'
import FormField from '../../components/FormField/FormField.component'
import Button from '../../components/Button/Button.component'
import { useState } from 'react'

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')

    const RegisterHandler = async (e) => {
        e.preventDefault()
        if (password !== passwordRepeat)
            return alert('Passwords are different!')
        try {
            const res = await axios.post(process.env.REACT_APP_API_URL + '/user/register', {
                username,
                password
            })
            if (res.data) {
                alert('Register success')
            }
        } catch (err) {
            alert(err.response.data.message)
            setPassword('')
            setPasswordRepeat('')
        }
    }

    return (
        <RegisterContainer>
            <FormContainer>
                <form onSubmit={RegisterHandler}>
                    <FormField
                        label={'Username'}
                        placeholder={'username'}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FormField
                        label={'Password'}
                        placeholder={'**********'}
                        type={'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormField
                        label={'Repeat password'}
                        placeholder={'**********'}
                        type={'password'}
                        value={passwordRepeat}
                        onChange={(e) => setPasswordRepeat(e.target.value)}
                    />
                    <section>
                        <input required type="checkbox" />
                        <span>I have read and agree to the "Terms Of Services"</span>
                    </section>
                    <Button $primary value={'Register'} />
                </form>
            </FormContainer>
            <img src={RegisterPicture} alt="register illustration" />
        </RegisterContainer>
    )
}

export default Register