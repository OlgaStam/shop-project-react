import { Card } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'

type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            {productsArray.map(
                ({ id, title, type, capacity, price, image }) => (
                    <Card sx={{ padding: '30px' }} key={id}>
                        <ProductListItem
                            id={id}
                            image={image}
                            title={title}
                            type={type}
                            capacity={capacity}
                            price={price}
                        />{' '}
                    </Card>
                )
            )}
        </>
    )
}

export default ProductList
