import { FormFieldContainer, ShowPasswordButton } from './FormField.style'
import { useState } from 'react'
import EyeShowIcon from '../../assets/img/eye-show.svg'
import EyeHideIcon from '../../assets/img/eye-hide.svg'

const FormField = ({ label, placeholder, color, ...props }) => {
    const [isShowPassword, setIsShowPassword] = useState(false)

    const togglePasswordVisibility = () => setIsShowPassword(!isShowPassword)

    return (
        <FormFieldContainer color={color}>
            <label htmlFor={label}>{label}</label>

            {props.type === 'password' ? (
                <div>
                    <input
                        {...props}
                        type={isShowPassword ? 'text' : 'password'}
                        placeholder={placeholder}
                    />
                    <ShowPasswordButton
                        type="button"
                        onClick={togglePasswordVisibility}
                    >
                        <img
                            src={isShowPassword ? EyeHideIcon : EyeShowIcon}
                            alt={isShowPassword ? 'hide-password-icon' : 'show-password-icon'}
                        />
                    </ShowPasswordButton>
                </div>
            ) : (
                <input placeholder={placeholder} {...props} />
            )}
        </FormFieldContainer>
    )
}

export default FormField
