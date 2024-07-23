import { Product } from 'utils/productsArray'

type Props = {
    product: Product
    productCount: number
}

const CartProductListItem = ({ product, productCount }: Props) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '300px',
                columnGap: '10px',
            }}
        >
            <div>
                {product.title}:{'   '}
            </div>
            <div> {productCount}</div>
        </div>
    )
}

export default CartProductListItem
