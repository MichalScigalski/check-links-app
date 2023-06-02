import { RegisterContainer, FormContainer } from './Register.style'
import RegisterPicture from '../../assets/img/login-picture.svg'
import FormField from '../../components/FormField/FormField.component'
import Button from '../../components/Button/Button.component'

const Register = () => {
    return (
        <RegisterContainer>
            <FormContainer>
                <form>
                    <FormField label={'Username'} placeholder={'username'} />
                    <FormField label={'Password'} placeholder={'**********'} />
                    <FormField label={'Repeat password'} placeholder={'**********'} />
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