import CartTotal from './CartTotal'
import CartProductList from './CartProdeuctList'

type Props = {
    productsInCart: { [id: number]: number }
}

const CartHeader = ({ productsInCart }: Props) => {
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
