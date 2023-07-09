import { ConfirmDialogContainer, ConfirmCancelButton } from './ConfirmDialog.style'

const ConfirmDialog = ({ message, onConfirm, onCancel, setIsOpen }) => {
    const confirmHandler = () => {
        setIsOpen(false)
        if (onConfirm) {
            onConfirm()
        }
    }
    const cancelHandler = () => {
        setIsOpen(false)
        if (onCancel) {
            onCancel()
        }
    }

    return (
        <ConfirmDialogContainer >
            <p onClick={confirmHandler}>{message}</p>
            <ConfirmCancelButton onClick={cancelHandler} />
        </ConfirmDialogContainer>
    )
}

export default ConfirmDialog
