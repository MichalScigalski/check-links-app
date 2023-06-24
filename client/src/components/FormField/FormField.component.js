import { FormFieldContainer } from './FormField.style'

const FormField = ({ label, placeholder, color, ...props }) => {
    return (
        <FormFieldContainer color={color}>
            <label htmlFor={label}>{label}</label>
            <input type="text" placeholder={placeholder} {...props} />
        </FormFieldContainer>
    )
}

export default FormField
