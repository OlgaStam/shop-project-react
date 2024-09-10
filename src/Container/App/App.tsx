import React, { useRef, useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import CartPage from 'pages/Cart/CartPage'
import AboutUs from 'pages/AboutUs/AboutUs'
import Payment from 'pages/Payment/Payment'
import Shipping from 'pages/Shipping/Shipping'
import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { Box, Container, createTheme } from '@mui/material'
import Header from 'Container/Header/Header' // Исправлен путь к Header
import Footer from 'Container/Footer/Footer' // Предположим, у вас есть Footer
import { AppProvider } from 'Context/AppContext' // Импорт вашего контекста
import Layout from 'Layout/layout'
import ProductPage from 'pages/Product/ProductPage'

// Создание темы для приложения
const theme = createTheme()

const App: React.FC = () => {
    const [headerHeight, setHeaderHeight] = useState(0) // Состояние для высоты хедера
    const headerRef = useRef<HTMLDivElement | null>(null) // Ссылка на элемент хедера

    useEffect(() => {
        if (headerRef.current) {
            const updateHeaderHeight = () => {
                setHeaderHeight(headerRef.current?.offsetHeight || 0) // Обновляем высоту хедера
            }

            updateHeaderHeight()

            window.addEventListener('resize', updateHeaderHeight) // Добавляем слушатель события resize
            return () =>
                window.removeEventListener('resize', updateHeaderHeight) // Убираем слушатель при размонтировании
        }
    }, []) // Пустой массив зависимостей, чтобы эффект сработал только один раз

    return (
        <AppProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header ref={headerRef} />{' '}
                {/* Передаем ссылку на хедер для получения его высоты */}
                <Box
                    sx={{
                        marginTop: `${headerHeight + 50}px`, // Отступ сверху для контента
                        marginBottom: '50px', // Отступ снизу для контента
                    }}
                >
                    <Container>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Layout
                                        productsInCart={{}} // Передайте данные о продуктах в корзине
                                        onHeaderHeightChange={setHeaderHeight}
                                    >
                                        <Home />
                                    </Layout>
                                }
                            />
                            <Route
                                path="/about-us"
                                element={
                                    <Layout
                                        productsInCart={{}} // Передайте данные о продуктах в корзине
                                        onHeaderHeightChange={setHeaderHeight}
                                    >
                                        <AboutUs />
                                    </Layout>
                                }
                            />
                            <Route
                                path="/payment"
                                element={
                                    <Layout
                                        productsInCart={{}} // Передайте данные о продуктах в корзине
                                        onHeaderHeightChange={setHeaderHeight}
                                    >
                                        <Payment />
                                    </Layout>
                                }
                            />
                            <Route
                                path="/shipping"
                                element={
                                    <Layout
                                        productsInCart={{}} // Передайте данные о продуктах в корзине
                                        onHeaderHeightChange={setHeaderHeight}
                                    >
                                        <Shipping />
                                    </Layout>
                                }
                            />
                            <Route
                                path="/cart"
                                element={
                                    <Layout
                                        productsInCart={{}} // Передайте данные о продуктах в корзине
                                        onHeaderHeightChange={setHeaderHeight}
                                    >
                                        <CartPage />
                                    </Layout>
                                }
                            />
                            <Route
                                path="/products/:id"
                                element={
                                    <Layout
                                        productsInCart={{}} // Передайте данные о продуктах в корзине
                                        onHeaderHeightChange={setHeaderHeight}
                                    >
                                        <ProductPage />
                                    </Layout>
                                }
                            />
                        </Routes>
                    </Container>
                </Box>
                <Footer />
            </ThemeProvider>
        </AppProvider>
    )
}

export default App
