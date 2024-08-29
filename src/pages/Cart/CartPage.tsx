// CartPage.tsx
import React from 'react'
import { Grid, Typography } from '@mui/material'
import CartProductList from 'components/Cart/CartProductList'
import CartProductListItemExtended from 'components/Cart/CartProductListItemExtended'
import CartTotal from 'components/Cart/CartTotal'
import { useAppContext } from 'Context/AppContext'
import GridContainer from 'components/GridContainer/GridContainer'

const CartPage = () => {
    const { productsInCart } = useAppContext() // Использование контекста

    return (
        <>
            <GridContainer>
                <Typography
                    component="h2"
                    variant="h3"
                    align="center"
                    sx={{
                        gridColumn: '1 / -1', // Заставляет заголовок занимать всю ширину сетки
                    }}
                >
                    Cart <CartTotal productsInCart={productsInCart} />
                </Typography>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </GridContainer>
        </>
    )
}

export default CartPage
