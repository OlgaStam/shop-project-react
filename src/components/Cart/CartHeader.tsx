import productsArray, { Product, getProductsObject } from 'utils/productsArray'
import CartTotal from './CartTotal'
import CartProductList from './CartProdeuctList'

type Props = {
    productsInCart: productsInCart
}
type productsInCart = {
    [id: number]: number
}

type productsObjectType = {
    [id: number]: Product
}
const CartHeader = ({ productsInCart }: Props) => {
    const productsObject: productsObjectType = getProductsObject(productsArray)
    return (
        <div>
            <div>
                <CartProductList productsInCart={productsInCart} />
            </div>
            <div
                style={{
                    textAlign: 'center',
                    borderTop: '1px solid red',
                }}
            >
                <CartTotal productsInCart={productsInCart} />
            </div>
        </div>
    )
}
export default CartHeader
