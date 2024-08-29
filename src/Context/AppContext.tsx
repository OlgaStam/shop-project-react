// AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react'

// Определение типа для состояния корзины
type ProductsInCart = { [id: number]: number }

// Определение типа для контекста
type AppContextType = {
    productsInCart: ProductsInCart
    addProductToCart: (id: number, count: number) => void
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

// Создание контекста с пустым значением по умолчанию
const AppContext = createContext<AppContextType | null>(null)

// Компонент провайдера контекста
const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({})

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => {
            const { [id]: _, ...rest } = prevState
            return rest
        })
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
                productsInCart,
                addProductToCart,
                removeProductFromCart,
                changeProductQuantity,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

// Хук для использования контекста
const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider')
    }
    return context
}

export { AppProvider, useAppContext }
