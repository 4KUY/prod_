import { classNames } from 'shared/lib/classnames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
interface LangSwitcherProps {
    className?: string
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()
    return (
        <Button
            className={classNames(cls.LangSwitcher, {} , [className])}
            theme={ThemeButton.CLEAR}
            onClick={() => 
                i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}
        >
            {t('Язык')}
            
        </Button>
    )
}


