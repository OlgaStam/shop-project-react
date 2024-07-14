import Header from 'Container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material'
import Main from 'Container/Main/Main'
import { useState } from 'react'

type CartData = {
    totalCount: number
    totalPrice: number
}
type productsInCart = {
    [id: number]: number
}
const App = () => {
    const [productsInCart, setProductsInCart] = useState<productsInCart>({
        1: 5,
        2: 5,
    })

    const [cartData, setCartData] = useState<CartData>({
        totalCount: 0,
        totalPrice: 0,
    })
    const addProductToCart = (count: number, price: number) => {
        setCartData((prevState) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + price * count,
        }))
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header productsInCart={productsInCart} />

                <Main addProductToCart={addProductToCart} />
            </StyledEngineProvider>
        </>
    )
}
export default App
