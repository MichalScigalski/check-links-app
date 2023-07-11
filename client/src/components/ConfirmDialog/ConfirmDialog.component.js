import { ConfirmDialogContainer } from './ConfirmDialog.style'

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
            <p>{message}</p>
            <div>
                <button onClick={confirmHandler}>🗑️</button>
                <button onClick={cancelHandler} >✖️</button>
            </div>
        </ConfirmDialogContainer>
    )
}

export default ConfirmDialog
