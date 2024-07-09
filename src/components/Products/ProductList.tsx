import { Typography } from '@mui/material'
import ProductListItem from './ProductListItem'

type Props = {}
const ProductList = (props: Props) => {
    return (
        <>
            <Typography component="h2" variant="h3" align="center">
                List of Products
            </Typography>
            <ProductListItem />
        </>
    )
}
export default ProductList
