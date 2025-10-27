import { classNames } from 'shared/lib/classnames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
interface SidebarProps {
    className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    const { t } = useTranslation();
    return (
        <div
            data-testid="sidebar"
            className={classNames(
                cls.Sidebar, 
                { [cls.collapsed]: collapsed }, 
                [className])}
        >
            <Button data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher 
                    short={collapsed? true : false} 
                    className={cls.lang}/>
            </div>
        </div>
    )
}