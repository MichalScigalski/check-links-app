import { AlertContainer } from './Alert.style'
import SuccessIcon from '../../assets/img/success-icon.svg'
import ErrorIcon from '../../assets/img/error-icon.svg'
import CloseIcon from '../../assets/img/close-icon.svg'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Alert = ({ alert, onClose }) => {
    const { status, text, isRefresh } = alert
    const navigate = useNavigate()

    let header = '',
        imgUrl = ''

    if (status) {
        header = 'Success'
        imgUrl = SuccessIcon
    } else {
        header = 'Error'
        imgUrl = ErrorIcon
    }

    useEffect(() => {
        const timer = setTimeout(
            () => {
                onClose()
                if (isRefresh) navigate(0)
            },
            isRefresh ? 1000 : 4000
        )

        return () => clearTimeout(timer)
    }, [onClose])

    const closeHandler = () => {
        onClose()
        if (isRefresh) navigate(0)
    }

    return (
        <AlertContainer show={true} status={status}>
            <img src={imgUrl} alt='alert-icon' />
            <div>
                <h1>{header}</h1>
                <h2>{text}</h2>
            </div>
            <img src={CloseIcon} alt='close-icon' onClick={closeHandler} />
        </AlertContainer>
    )
}

export default Alert
