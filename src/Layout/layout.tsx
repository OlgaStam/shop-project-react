// src/Layout/Layout.tsx

import React from 'react'
import { Box, Container, styled } from '@mui/material'
import Header from 'Container/Header/Header'
import Footer from 'Container/Footer/Footer'

// Стили для основного содержимого страницы
const MainContent = styled(Box)({
    marginTop: '120px', // Отступ сверху, учитывающий высоту заголовка
    marginBottom: '50px', // Отступ снизу для пространства под футером
})

// Типы пропсов для компонента Layout
type Props = {
    children: React.ReactNode // Дети компонента, которые будут отображаться внутри
    productsInCart: { [id: number]: number } // Объект с продуктами в корзине, где ключ - ID продукта, значение - количество
    onHeaderHeightChange: (height: number) => void // Функция для изменения высоты заголовка
}

// Компонент Layout, отвечающий за макет страницы
const Layout = ({ children, productsInCart, onHeaderHeightChange }: Props) => {
    return (
        <Box>
            <Header />
            <MainContent>
                <Container style={{ marginBottom: '100px' }}>
                    {children}
                </Container>
            </MainContent>
            <Footer />
        </Box>
    )
}

export default Layout
