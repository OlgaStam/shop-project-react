// src/components/Breadcrumbs.tsx
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material'
import './Breadcrumbs.scss'
// Используем кастомный разделитель
const CustomSeparator = () => <span>&gt;</span>

const Breadcrumbs: React.FC = () => {
    const location = useLocation()
    const paths = location.pathname.split('/').filter((x) => x)

    return (
        <MuiBreadcrumbs separator={<CustomSeparator />} aria-label="breadcrumb">
            <Link to="/">Home</Link>
            {paths.map((path, index) => {
                const href = `/${paths.slice(0, index + 1).join('/')}`
                return (
                    <Link key={index} to={href}>
                        {path}
                    </Link>
                )
            })}
        </MuiBreadcrumbs>
    )
}

export default Breadcrumbs
