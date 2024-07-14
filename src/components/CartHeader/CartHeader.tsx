type Props = {
    productsInCart: productsInCart
}
type productsInCart = {
    [id: number]: number
}
const CartHeader = ({ productsInCart }: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productId}: {productsInCart[Number(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeader
