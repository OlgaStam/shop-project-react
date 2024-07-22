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
                            maxWidth: '300px',
                        }}
                    >
                        <div
                        // style={{
                        //     fontSize: '10px',
                        //     lineHeight: '1',
                        // }}
                        >
                            {productsObject[parseInt(productId)].title}:{'   '}
                        </div>
                        <div> {productsInCart[Number(productId)]}</div>
                        <div> *</div>
                        <div>{productsObject[parseInt(productId)].price}</div>
                        <div> =</div>
                        <div>
                            {' '}
                            $
                            {productsObject[parseInt(productId)].price *
                                productsInCart[parseInt(productId)]}
                        </div>
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
                    borderTop: '1px solid red',
                }}
            >
                <div> Total: </div>
                <div>
                    {' '}
                    ${' '}
                    {Object.keys(productsInCart).reduce(
                        (total, productId) =>
                            total +
                            productsObject[parseInt(productId)].price *
                                productsInCart[parseInt(productId)],
                        0
                    )}
                </div>
            </div>
        </div>
    )
}
export default CartPage
