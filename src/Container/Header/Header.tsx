import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container, styled } from '@mui/material'

import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/menu'
import CartHeader from 'components/CartHeader/CartHeader'

const StyledAppBar = styled(AppBar)({
    position: 'fixed',
    top: 0,
    backgroundColor: '#653c7a',
})
type Props = {}
const Header = (props: Props) => {
    return (
        <StyledAppBar className="app-bar">
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
                    <CartHeader />
                </Toolbar>
            </Container>
        </StyledAppBar>
    )
}
export default Header
