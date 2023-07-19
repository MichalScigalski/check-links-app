import { ConfirmDialogContainer } from './ConfirmDialog.style'
import Modal from 'react-modal'
import { colors, modalStyles } from '../../globalStyles'
import Button from '../Button/Button.component'

const ConfirmDialog = ({ message, onConfirm, onCancel, isOpen, setIsOpen }) => {
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
        <Modal isOpen={isOpen} style={modalStyles}>
            <ConfirmDialogContainer>
                <h2>{message}</h2>
                <div>
                    <Button onClick={confirmHandler} value="Confirm" />
                    <Button
                        onClick={cancelHandler}
                        bgColor={colors.red}
                        value="Cancel"
                    />
                </div>
            </ConfirmDialogContainer>
        </Modal>
    )
}

export default ConfirmDialog
