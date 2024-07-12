import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductListItem.scss'

type Props = {
    image: any
    title: string
    type: string
    capacity: string
    price: number
}
const ProductListItem = ({ image, title, type, capacity, price }: Props) => (
    <Card className="product" variant="outlined">
        <CardContent>
            <div className="product-img">
                <img src={image} alt="" />
            </div>
            <h4 className="product-title">{title}</h4>
            <div className="product-discription">This is {title}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Capacity: {capacity}Gb</div>
            <div className="product-price">Price: $ {price}</div>
            <div className="product-quantity">
                <Button variant="outlined">-</Button>
                <TextField value="1" size="small" />
                <Button variant="outlined">+</Button>
            </div>
        </CardContent>
        <CardActions className="btns-wrap">
            <Button variant="outlined">Add to card</Button>
        </CardActions>
    </Card>
)
export default ProductListItem
