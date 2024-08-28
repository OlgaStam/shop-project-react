import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'
import { useContext, useState } from 'react'
import Quantity from 'components/Quantity/Quantity'
import { AppContext } from 'Container/App/App'
import { Link } from 'react-router-dom'

type Props = {
    id: number
    image: any
    title: string
    type: string
    capacity: string
    price: number
    category?: string
}
const ProductListItem = ({
    id,
    image,
    title,
    type,
    capacity,
    price,
    category,
}: Props) => {
    const data = useContext(AppContext)
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
                {/* Условный рендеринг категории */}
                {category && (
                    <div className="product-features">
                        Category:{' '}
                        <Link to={`/category/${category}`}>{category}</Link>
                    </div>
                )}

                <div className="product-price">Price: $ {price}</div>
                <Quantity
                    minCount={1}
                    count={count}
                    onDecrementClick={onDecrementClick}
                    onIncrementClick={onIncrementClick}
                />
            </CardContent>
            <CardActions className="btns-wrap">
                <Button
                    variant="outlined"
                    onClick={() => data?.addProductToCart(id, count)}
                >
                    Add to card
                </Button>
            </CardActions>
        </Card>
    )
}
export default ProductListItem
