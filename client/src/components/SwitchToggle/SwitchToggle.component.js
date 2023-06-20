import {
    SwitchContainer,
    SwitchInputChecked,
    SwitchSlider,
} from './SwitchToggle.style'

const SwitchToggle = ({ checked, onChange }) => {
    return (
        <SwitchContainer>
            <SwitchInputChecked
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <SwitchSlider />
        </SwitchContainer>
    )
}

export default SwitchToggle
