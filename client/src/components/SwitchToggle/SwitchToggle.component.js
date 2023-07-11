import {
    SwitchContainer,
    SwitchInputChecked,
    SwitchSlider,
} from './SwitchToggle.style'

const SwitchToggle = ({ checked, isThemeSwitch, onChange }) => {
    return (
        <SwitchContainer>
            <SwitchInputChecked
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <SwitchSlider checked={checked} isThemeSwitch={isThemeSwitch} />
        </SwitchContainer>
    )
}

export default SwitchToggle
