import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

type Props = {}
const ProductListItem = (props: Props) => {
    return (
        <Card className="producnt" variant="outlined">
            <CardContent>
                <h4 className="product-title">iPfone X</h4>
                <div className="product-discription">This is iPhone X</div>
                <div className="product-features">Type: phone</div>
                <div className="product-features">Capacity: 64Gb</div>
                <div className="product-price">Price: $ 500</div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to card</Button>
            </CardActions>
        </Card>
    )
}
export default ProductListItem
