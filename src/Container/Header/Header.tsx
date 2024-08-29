import React, { useState, useRef, useEffect, forwardRef } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container, styled } from '@mui/material'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/menu'
import CartHeader from 'components/Cart/CartHeader'

const StyledAppBar = styled(AppBar)({
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#653c7a',
    overflow: 'hidden' /* Скрывает содержимое, выходящее за пределы хедера */,
})

const HeaderContent = styled('div')({
    maxHeight: '120px' /* Максимальная высота хедера */,
    overflowY: 'auto' /* Добавляет вертикальную прокрутку */,
})

type Props = {
    productsInCart: productsInCart
}

type productsInCart = {
    [id: number]: number
}

const Header = forwardRef<HTMLDivElement, Props>(({ productsInCart }, ref) => {
    const [headerHeight, setHeaderHeight] = useState(0)
    const headerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (headerRef.current) {
            const updateHeaderHeight = () => {
                setHeaderHeight(headerRef.current?.offsetHeight || 0)
            }

            updateHeaderHeight()
            window.addEventListener('resize', updateHeaderHeight)

            return () =>
                window.removeEventListener('resize', updateHeaderHeight)
        }
    }, [productsInCart])

    return (
        <StyledAppBar ref={ref} className="header">
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo />
                    <Menu />
                    <HeaderContent ref={headerRef}>
                        <CartHeader productsInCart={productsInCart} />
                    </HeaderContent>
                </Toolbar>
            </Container>
        </StyledAppBar>
    )
})

export default Header
