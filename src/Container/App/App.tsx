import Header from 'Container/Header/Header'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import CartPage from 'pages/Cart/CartPage'
import { omit } from 'lodash'
import { ThemeProvider } from '@emotion/react'
import { Box, Container, CssBaseline, createTheme } from '@mui/material'
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

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => omit(prevState, [id]))
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ marginTop: '180px' }}>
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
                        <Route
                            path="/cart"
                            element={
                                <CartPage
                                    productsInCart={productsInCart}
                                    removeProductFromCart={
                                        removeProductFromCart
                                    }
                                />
                            }
                        />
                    </Routes>
                </Container>{' '}
            </Box>
        </ThemeProvider>
    )
}
export default App
