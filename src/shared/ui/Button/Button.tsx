import { classNames } from 'shared/lib/classnames/classNames'
import cls from './Button.module.scss'
import { FC, ButtonHTMLAttributes } from 'react'
export enum ThemeButton{
    CLEAR = 'clear',
    PRIMARY = 'primary',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}
export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme,
        ...otherProps
    } = props
    return (
        <button 
            className={classNames(cls.Button, {}, [className, cls[theme]])} 
            {...otherProps}
            type='button'
        >
            {children}
        </button>
    )
}