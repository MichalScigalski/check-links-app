import {FormFieldContainer} from './FormField.style'

const FormField = ({label, placeholder, ...props}) => {
    return(
        <FormFieldContainer>
            <label htmlFor={label}>{label}</label>
            <input type="text" placeholder={placeholder} {...props}/>
        </FormFieldContainer>
    )
}

export default FormField