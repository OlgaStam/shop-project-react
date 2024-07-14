import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductListItem.scss'
import { useState } from 'react'

type Props = {
    id: number
    image: any
    title: string
    type: string
    capacity: string
    price: number
    addProductToCart: (id: number, count: number) => void
}
const ProductListItem = ({
    id,
    image,
    title,
    type,
    capacity,
    price,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }

    return (
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
                    <Button
                        variant="outlined"
                        onClick={() => onDecrementClick()}
                        disabled={count === 1}
                    >
                        -
                    </Button>
                    <TextField value={count} size="small" />
                    <Button
                        variant="outlined"
                        onClick={() => onIncrementClick()}
                        disabled={count === 10}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to card
                </Button>
            </CardActions>
        </Card>
    )
}
export default ProductListItem
