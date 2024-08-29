import React from 'react'
import CartTotal from './CartTotal'
import CartProductList from './CartProductList' // Исправлен импорт

type Props = {
    productsInCart: { [id: number]: number }
}

const CartHeader: React.FC<Props> = ({ productsInCart }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                maxHeight: '110px',
                overflowY: 'auto',
                marginTop: '10px',
            }}
        >
            <div style={{ flex: '1', overflowY: 'auto' }}>
                <CartProductList productsInCart={productsInCart} />
            </div>
            <div
                style={{
                    textAlign: 'center',
                    borderTop: '1px solid red',
                    paddingTop: '8px',
                }}
            >
                <CartTotal productsInCart={productsInCart} />
            </div>
        </div>
    )
}

export default CartHeader
