import { Grid } from '@mui/material'
import CartProductList from 'components/Cart/CartProdeuctList'
import CartProductListItemExtended from 'components/Cart/CartProductListItemExtended'
import CartTotal from 'components/Cart/CartTotal'
import productsArray, { Product, getProductsObject } from 'utils/productsArray'

type Props = {
    productsInCart: productsInCart
}
type productsInCart = {
    [id: number]: number
}

type productsObjectType = {
    [id: number]: Product
}
const CartPage = ({ productsInCart }: Props) => {
    const productsObject: productsObjectType = getProductsObject(productsArray)
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
