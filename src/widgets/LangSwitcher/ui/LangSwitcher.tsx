import { classNames } from 'shared/lib/classnames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
interface LangSwitcherProps {
    className?: string
    short?: boolean
}
export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()
    return (
        <Button
            className={classNames(cls.LangSwitcher, {} , [className, ])}
            theme={ButtonTheme.CLEAR}
            onClick={() => 
                i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}
        >
            {t(short ? 'Короткий Язык' : 'Язык')}
            
        </Button>
    )
}


