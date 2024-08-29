import React, { forwardRef } from 'react'
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
    overflow: 'hidden',
})

const HeaderContent = styled('div')({
    maxHeight: '120px',
    overflowY: 'auto',
})

type Props = {
    productsInCart: { [id: number]: number }
}

const Header = forwardRef<HTMLDivElement, Props>(({ productsInCart }, ref) => {
    return (
        <StyledAppBar ref={ref}>
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
                    <HeaderContent>
                        <CartHeader productsInCart={productsInCart} />
                    </HeaderContent>
                </Toolbar>
            </Container>
        </StyledAppBar>
    )
})

export default Header
