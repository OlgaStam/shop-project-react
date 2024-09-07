import productsArray, { Product, getProductsObject } from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: { [id: number]: number }
    productsObject?: { [id: number]: Product }
    CartItem?: React.ElementType<any> // Явный тип для пропса CartItem
}

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => {
                const id = Number(productId) // Используй Number для преобразования
                return (
                    <CartItem
                        key={id}
                        id={id} // Передай id сюда
                        product={productsObject[id]}
                        productCount={productsInCart[id]}
                    />
                )
            })}
        </>
    )
}

export default CartProductList
