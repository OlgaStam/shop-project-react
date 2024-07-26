import Header from 'Container/Header/Header'
import { createContext, useState } from 'react'
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

type Context = {
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}
export const AppContext = createContext<Context | null>(null)

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

    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: count,
        }))
    }

    return (
        <AppContext.Provider
            value={{
                removeProductFromCart: removeProductFromCart,
                changeProductQuantity: changeProductQuantity,
            }}
        >
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
                                    <CartPage productsInCart={productsInCart} />
                                }
                            />
                        </Routes>
                    </Container>{' '}
                </Box>
            </ThemeProvider>
        </AppContext.Provider>
    )
}
export default App
