// Стандартные библиотеки
import React, { useRef, useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

// Библиотеки сторонних разработчиков
import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { Box, Container, createTheme } from '@mui/material'

// Локальные модули
import Home from 'pages/Home/Home'
import CartPage from 'pages/Cart/CartPage'
import AboutUs from 'pages/AboutUs/AboutUs'
import Payment from 'pages/Payment/Payment'
import Shipping from 'pages/Shipping/Shipping'
import Header from 'Container/Header/Header'
import Footer from 'Container/Footer/Footer'
import { AppProvider } from 'Context/AppContext'
import Layout from 'Layout/layout'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'

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
                        marginTop: `${headerHeight + 15}px`, // Отступ сверху для контента
                        marginBottom: '20px', // Отступ снизу для контента
                    }}
                >
                    <Container>
                        <Breadcrumbs /> {/* Добавляем хлебные крошки */}
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
                        </Routes>
                    </Container>
                </Box>
                <Footer />
            </ThemeProvider>
        </AppProvider>
    )
}

export default App
