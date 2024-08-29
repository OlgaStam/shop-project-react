import Header from 'Container/Header/Header'
import { createContext, useState, useRef, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import CartPage from 'pages/Cart/CartPage'
import AboutUs from 'pages/AboutUs/AboutUs'
import Payment from 'pages/Payment/Payment'
import Shipping from 'pages/Shipping/Shipping'
import { omit } from 'lodash'
import { ThemeProvider } from '@emotion/react'
import { Box, Container, CssBaseline, createTheme } from '@mui/material'
const theme = createTheme()

type productsInCart = {
    [id: number]: number
}

type Context = {
    addProductToCart: (id: number, count: number) => void
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}
export const AppContext = createContext<Context | null>(null)

const App = () => {
    const [productsInCart, setProductsInCart] = useState<productsInCart>({})

    const [headerHeight, setHeaderHeight] = useState(0)
    const headerRef = useRef<HTMLDivElement | null>(null) // Изменено: HTMLDivElement вместо HTMLElement

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
        <AppContext.Provider
            value={{
                addProductToCart: addProductToCart,
                removeProductFromCart: removeProductFromCart,
                changeProductQuantity: changeProductQuantity,
            }}
        >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header ref={headerRef} productsInCart={productsInCart} />{' '}
                {/* Изменено: добавлен ref к Header */}
                <Box
                    sx={{
                        marginTop: `${headerHeight + 50}px`,
                        marginBottom: '50px',
                    }}
                >
                    <Container>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about-us" element={<AboutUs />} />
                            <Route path="/payment" element={<Payment />} />
                            <Route path="/shipping" element={<Shipping />} />
                            <Route
                                path="/cart"
                                element={
                                    <CartPage productsInCart={productsInCart} />
                                }
                            />
                        </Routes>
                    </Container>
                </Box>
            </ThemeProvider>
        </AppContext.Provider>
    )
}

export default App
