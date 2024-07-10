import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'

type Props = {}
const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                component="h2"
                variant="h3"
                align="center"
                sx={{
                    marginBottom: '30px',
                }}
            >
                List of Products
            </Typography>
            <Grid container spacing={4}>
                {productsArray.map(
                    (productTheCurrentArrayElementInEachMapIteration) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={
                                productTheCurrentArrayElementInEachMapIteration.id
                            }
                        >
                            <ProductListItem
                                id={
                                    productTheCurrentArrayElementInEachMapIteration.id
                                }
                                title={
                                    productTheCurrentArrayElementInEachMapIteration.title
                                }
                                type={
                                    productTheCurrentArrayElementInEachMapIteration.type
                                }
                                capacity={
                                    productTheCurrentArrayElementInEachMapIteration.capacity
                                }
                                price={
                                    productTheCurrentArrayElementInEachMapIteration.price
                                }
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductList
