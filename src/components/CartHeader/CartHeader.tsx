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
const CartHeader = ({ productsInCart }: Props) => {
    const productsObject: productsObjectType = getProductsObject(productsArray)
    return (
        <div>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div
                        key={productId}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                            maxWidth: '400px',
                        }}
                    >
                        <div
                            style={{
                                fontSize: '12px',
                                lineHeight: '1.6',
                            }}
                        >
                            {productsObject[parseInt(productId)].title} :
                        </div>
                        <div> {productsInCart[Number(productId)]}</div>
                    </div>
                ))}
            </div>
            <div>
                Total: ${' '}
                {Object.keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsObject[parseInt(productId)].price *
                            productsInCart[parseInt(productId)],
                    0
                )}
            </div>
        </div>
    )
}
export default CartHeader
