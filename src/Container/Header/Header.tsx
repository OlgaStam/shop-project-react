// src/Container/Header/Header.tsx

import React, { forwardRef } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container, styled } from '@mui/material'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import CartHeader from 'components/Cart/CartHeader'
import { useAppContext } from 'Context/AppContext'

// Стили для AppBar
const StyledAppBar = styled(AppBar)({
    position: 'fixed', // Закрепляем AppBar вверху страницы
    top: 0,
    width: '100%',
    backgroundColor: '#653c7a', // Цвет фона
    overflow: 'hidden', // Обрезаем все, что выходит за пределы
})

// Стили для содержимого заголовка
const HeaderContent = styled('div')({
    maxHeight: '120px', // Максимальная высота
    overflowY: 'auto', // Прокрутка по вертикали при необходимости
})

// Компонент Header с использованием forwardRef
const Header = forwardRef<HTMLDivElement>((_, ref) => {
    // Извлекаем данные из контекста
    const { productsInCart } = useAppContext()

    return (
        <StyledAppBar ref={ref}>
            <Container>
                <Toolbar>
                    {/* Кнопка меню */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* Логотип */}
                    <Logo />
                    {/* Меню */}
                    <Menu />
                    {/* Содержимое заголовка, включая корзину */}
                    <HeaderContent>
                        <CartHeader productsInCart={productsInCart} />
                    </HeaderContent>
                </Toolbar>
            </Container>
        </StyledAppBar>
    )
})

export default Header
