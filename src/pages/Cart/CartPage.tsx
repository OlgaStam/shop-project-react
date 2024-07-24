import { Grid } from '@mui/material'
import CartProductList from 'components/Cart/CartProdeuctList'
import CartProductListItemExtended from 'components/Cart/CartProductListItemExtended'
import CartTotal from 'components/Cart/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }

    removeProductFromCart: (id: number) => void
}

const CartPage = ({ productsInCart, removeProductFromCart }: Props) => (
    <>
        <Grid container spacing={4}>
            <CartProductList
                productsInCart={productsInCart}
                CartItem={CartProductListItemExtended}
                removeProductFromCart={removeProductFromCart}
            />
        </Grid>
        <CartTotal productsInCart={productsInCart} />
    </>
)
export default CartPage
