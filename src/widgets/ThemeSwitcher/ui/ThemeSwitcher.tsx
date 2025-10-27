import { classNames } from 'shared/lib/classnames/classNames'
import { Theme, useTheme } from 'app/providers'
import LightIcon from 'shared/assets/theme-light.svg'
import DarkIcon from 'shared/assets/theme-dark.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()
    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}