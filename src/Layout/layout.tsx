// src/Layout/Layout.tsx

import React from 'react'
import { Box, Container, styled } from '@mui/material'

// Стили для основного содержимого страницы
const MainContent = styled(Box)({
    marginTop: '15px', // Отступ сверху, учитывающий высоту заголовка
    marginBottom: '15px', // Отступ снизу для пространства под футером
})

// Типы пропсов для компонента Layout
type Props = {
    children: React.ReactNode // Дети компонента, которые будут отображаться внутри
    productsInCart: { [id: number]: number } // Объект с продуктами в корзине, где ключ - ID продукта, значение - количество
    onHeaderHeightChange: (height: number) => void // Функция для изменения высоты заголовка
}

// Компонент Layout, отвечающий за макет страницы
const Layout = ({ children }: Props) => {
    return (
        <Box>
            <MainContent>
                <Container style={{ marginBottom: '100px' }}>
                    {children}
                </Container>
            </MainContent>
        </Box>
    )
}

export default Layout
