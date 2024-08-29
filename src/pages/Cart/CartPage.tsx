import { Grid } from '@mui/material'
import CartProductList from 'components/Cart/CartProductList'
import CartProductListItemExtended from 'components/Cart/CartProductListItemExtended'
import CartTotal from 'components/Cart/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart }: Props) => (
    <>
        <Grid container spacing={4}>
            <CartProductList
                productsInCart={productsInCart}
                CartItem={CartProductListItemExtended}
            />
        </Grid>
        <CartTotal productsInCart={productsInCart} />
    </>
)
export default CartPage
