import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'

type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            {productsArray.map(
                ({ id, title, type, capacity, price, image }) => (
                    <ProductListItem
                        id={id}
                        image={image}
                        title={title}
                        type={type}
                        capacity={capacity}
                        price={price}
                    />
                )
            )}
        </>
    )
}

export default ProductList
