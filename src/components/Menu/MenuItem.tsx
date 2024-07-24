import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './MenuItem.scss'
//3
type Props = {
    to: string
    children: React.ReactNode
}
//4 пропсы to, children в функцию
const MenuItem = ({ to, children }: Props) => {
    return (
        <Button color="inherit">
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'menu-item-active' : 'menu-item'
                }
                to={to} //2 динамично передается адрес
            >
                {children}
                {/*1 динамически передается контент (название страницы)*/}
            </NavLink>
        </Button>
    )
}

export default MenuItem
