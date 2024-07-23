import { Grid } from '@mui/material'
import CartProductList from 'components/Cart/CartProdeuctList'
import CartProductListItemExtended from 'components/Cart/CartProductListItemExtended'
import CartTotal from 'components/Cart/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart }: Props) => {
    return (
        <>
            <div>
                <Grid container spacing={4}>
                    <CartProductList
                        productsInCart={productsInCart}
                        CartItem={CartProductListItemExtended}
                    />
                </Grid>
            </div>
            <div>
                <CartTotal productsInCart={productsInCart} />
            </div>
        </>
    )
}
export default CartPage
