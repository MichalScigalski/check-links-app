import { AlertContainer } from './Alert.style'
import SuccessIcon from '../../assets/img/success-icon.svg'
import ErrorIcon from '../../assets/img/error-icon.svg'
import CloseIcon from '../../assets/img/close-icon.svg'
import { useEffect } from 'react'

const Alert = ({ type, text, onClose }) => {
    let header = '',
        imgUrl = ''

    switch (type) {
        case 'success':
            header = 'Success'
            imgUrl = SuccessIcon
            break
        case 'error':
            header = 'Error'
            imgUrl = ErrorIcon
            break
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose()
        }, 5000)

        return () => clearTimeout(timer)
    }, [onClose])

    return (
        <AlertContainer show={true} type={type}>
            <img src={imgUrl} alt={type + '-icon'} />
            <div>
                <h1>{header}</h1>
                <h2>{text}</h2>
            </div>
            <img src={CloseIcon} alt="close-icon" onClick={onClose} />
        </AlertContainer>
    )
}

export default Alert
