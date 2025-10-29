/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classnames/classNames"
import cls from "./Navbar.module.scss"
import { useTranslation } from "react-i18next"
import { Modal } from "shared/ui/Modal/Modal"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { useCallback, useState } from "react"
interface NavbarProps {
    className?: string
}
export const Navbar = ({ className }: NavbarProps) => {
    const {t} = useTranslation()
    const [isAuth, setIsAuth] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuth((prev) => !prev)
    }, [])
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button 
                theme={ButtonTheme.CLEAR} 
                className={cls.links} 
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            
            <Modal isOpen={isAuth} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque magni 
                commodi magnam rerum modi tenetur, consequuntur blanditiis explicabo. 
                Incidunt dignissimos porro inventore praesentium, quas dolor atque. 
                Rem, quos molestiae.
            </Modal>
        </div>
    )
}