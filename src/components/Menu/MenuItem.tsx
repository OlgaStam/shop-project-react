import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './MenuItem.scss'
import { Button } from '@mui/material'

type Props = {
    to: string
    children: React.ReactNode
}

const MenuItem = ({ to, children }: Props) => {
    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <Button color="inherit">
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? 'menu-item-active'
                        : isHovered
                          ? 'menu-item-hover'
                          : 'menu-item'
                }
                to={to}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </NavLink>
        </Button>
    )
}

export default MenuItem
