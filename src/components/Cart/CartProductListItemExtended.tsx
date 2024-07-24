import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button, Card, CardContent, Grid } from '@mui/material'

type Props = {
    product: Product
    productCount: number
    removeProductFromCart: (id: number) => void
}

const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
}: Props) => {
    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={4}
            container
            spacing={3}
            alignItems="stretch"
        >
            <Card>
                <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                        className="product-img"
                        style={{ marginRight: '16px' }}
                    >
                        <img
                            src={product.image}
                            alt=""
                            style={{ maxWidth: '200px' }}
                        />
                    </div>
                    <div>
                        <div className="product-title">
                            {product.title}
                            {'   '}
                        </div>
                        <div className="product-features">
                            Count: {productCount}
                        </div>
                        <div className="product-features">
                            Price for one item: ${product.price}
                        </div>
                        <div className="product-features">
                            Sum: ${product.price * productCount}
                        </div>
                        <Button
                            variant="outlined"
                            onClick={() => removeProductFromCart(product.id)}
                        >
                            <DeleteIcon />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
