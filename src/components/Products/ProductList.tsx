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
                    ({ id, title, type, capacity, price, image, category }) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            container
                            spacing={3}
                            alignItems="stretch"
                            sx={{ '& > *': { width: '100%' } }} // Этот стиль применяет одинаковую ширину
                        >
                            <ProductListItem
                                id={id}
                                image={image}
                                title={title}
                                type={type}
                                capacity={capacity}
                                category={category}
                                price={price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductList
