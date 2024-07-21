import Header from 'Container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import {
    Box,
    Container,
    StyledEngineProvider,
    ThemeProvider,
    createTheme,
} from '@mui/material'
import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from 'pages/Home/Home'
import CartPage from 'pages/Cart/CartPage'

const theme = createTheme()

type productsInCart = {
    [id: number]: number
}
const App = () => {
    const [productsInCart, setProductsInCart] = useState<productsInCart>({})

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ marginTop: '80px' }}>
                {' '}
                {/* Отступ для всех страниц */}
                <Header productsInCart={productsInCart} />
                <Container>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home addProductToCart={addProductToCart} />
                            }
                        />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </Container>{' '}
            </Box>
        </ThemeProvider>
    )
}
export default App
