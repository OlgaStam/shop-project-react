import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    id: number
    title: string
    type: string
    capacity: string
    price: number
}
function ProductListItem(props: Props) {
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <h4 className="product-title">{props.title}</h4>
                <div className="product-discription">This is {props.title}</div>
                <div className="product-features">Type: {props.type}</div>
                <div className="product-features">
                    Capacity: {props.capacity}Gb
                </div>
                <div className="product-price">Price: $ {props.price}</div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to card</Button>
            </CardActions>
        </Card>
    )
}
export default ProductListItem
