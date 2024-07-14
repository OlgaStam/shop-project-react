import Header from 'Container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material'
import Main from 'Container/Main/Main'
import { useState } from 'react'

type CartData = {
    totalCount: number
    totalPrice: number
}
const App = () => {
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
                <Header cartData={cartData} />
                <button
                    style={{
                        top: '80px',
                        position: 'fixed',
                    }}
                    onClick={() => addProductToCart(5, 500)}
                >
                    add to cart (count:5, prise:500$)
                </button>
                <Main />
            </StyledEngineProvider>
        </>
    )
}
export default App
