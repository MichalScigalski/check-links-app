import { ButtonContainer } from './Button.style'

const Button = ({ value, ...props }) => {
    return (
        <ButtonContainer {...props}>
            {value}
        </ButtonContainer>
    )
}

export default Button