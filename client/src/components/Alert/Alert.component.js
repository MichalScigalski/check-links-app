import { AlertContainer } from './Alert.style'
import SuccessIcon from '../../assets/img/success-icon.svg'
import ErrorIcon from '../../assets/img/error-icon.svg'
import CloseIcon from '../../assets/img/close-icon.svg'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { AlertContext } from '../../context/Alert.context'

const Alert = () => {
    const { alertData, setAlertData } = useContext(AlertContext)
    const { status, text, navigation } = alertData
    const navigate = useNavigate()
    const [showAlert, setShowAlert] = useState(false)

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
        if (alertData !== null) {
            setShowAlert(true)

            const timer = setTimeout(() => {
                closeHandler()
            }, navigation !== undefined ? 1000 : 3000)

            return () => clearTimeout(timer)
        }
    }, [alertData])

    const closeHandler = () => {
        setShowAlert(false)
        setTimeout(() => {
            setAlertData(null)
            if (navigation !== undefined) navigate(navigation)
        }, 300)
    }

    return (
        showAlert && (
            <AlertContainer show={true} status={status}>
                <img src={imgUrl} alt='alert-icon' />
                <div>
                    <h1>{header}</h1>
                    <h2>{text}</h2>
                </div>
                <img src={CloseIcon} alt='close-icon' onClick={closeHandler} />
            </AlertContainer>
        )
    )
}

export default Alert
