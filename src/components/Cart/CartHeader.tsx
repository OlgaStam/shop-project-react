import productsArray, { Product, getProductsObject } from 'utils/productsArray'
import CartTotal from './CartTotal'
import React from 'react'

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
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {Object.keys(productsInCart).map((productId) => (
                    <div
                        key={productId}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>{productsObject[parseInt(productId)].title} :</div>
                        <div> {productsInCart[Number(productId)]}</div>
                    </div>
                ))}
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    maxWidth: '300px',
                    borderTop: '1px solid dark-purple',
                }}
            >
                <CartTotal productsInCart={productsInCart} />
            </div>
        </div>
    )
}
export default CartHeader
