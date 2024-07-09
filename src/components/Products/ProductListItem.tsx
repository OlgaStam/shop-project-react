import { Button, Card, CardActions, CardContent } from '@mui/material'

type Props = {}
const ProductListItem = (props: Props) => {
    return (
        <Card className="producnt">
            <CardContent>
                <h4 className="product-title">iPfone X</h4>
                <p className="product-discription">This is iPhone X</p>
                <div className="product-features">Type: phone</div>
                <div className="product-features">Capacity: 64Gb</div>
                <div className="product-price">$ 500</div>
            </CardContent>
            <CardActions>
                <Button>Add to card</Button>
            </CardActions>
        </Card>
    )
}
export default ProductListItem
