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

    // const [cartData, setCartData] = useState<CartData>({
    //     totalCount: 0,
    //     totalPrice: 0,
    // })
    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            [id]: prevState[id] + count,
        }))
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header productsInCart={productsInCart} />
                <button
                    style={{
                        top: '80px',
                        position: 'fixed',
                    }}
                    onClick={() => addProductToCart(2, 10)}
                >
                    Add to Cart (id:2, count:10)
                </button>
                <Main addProductToCart={addProductToCart} />
            </StyledEngineProvider>
        </>
    )
}
export default App
