import React, { forwardRef } from 'react' // Добавлено: import forwardRef
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
    backgroundColor: '#653c7a',
})

type Props = {
    productsInCart: productsInCart
}

type productsInCart = {
    [id: number]: number
}

// Изменено: Использование forwardRef
const Header = forwardRef<HTMLDivElement, Props>(({ productsInCart }, ref) => {
    return (
        <StyledAppBar ref={ref} className="app-bar">
            {' '}
            {/* Изменено: добавлен ref к StyledAppBar */}
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
                    <CartHeader productsInCart={productsInCart} />
                </Toolbar>
            </Container>
        </StyledAppBar>
    )
})

export default Header
