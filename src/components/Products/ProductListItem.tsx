import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material'
import { useContext, useState } from 'react'
import Quantity from 'components/Quantity/Quantity'
import { AppContext } from 'Container/App/App'
import { Link } from 'react-router-dom'
import './ProductListItem.scss'

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
        <Card
            className="product"
            variant="outlined"
            sx={{
                display: 'flex',
                height: '100%',
            }}
        >
            <CardContent>
                <Typography
                    variant="h5"
                    align="center"
                    sx={{ marginBottom: '16px' }}
                >
                    {title}
                </Typography>
                <div
                    className="product-content"
                    style={{ display: 'flex', flex: '1 0 auto', width: '100%' }}
                >
                    <div className="product-img">
                        <img src={image} alt={title} />
                    </div>
                    <div
                        className="product-details"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <div className="product-description">
                                This is {title}
                            </div>
                            <div className="product-features">Type: {type}</div>
                            <div className="product-features">
                                Capacity: {capacity}Gb
                            </div>
                            {category && (
                                <div className="product-features">
                                    Category:{' '}
                                    <Link to={`/category/${category}`}>
                                        {category}
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="product-price">Price: ${price}</div>
                            <Quantity
                                minCount={1}
                                count={count}
                                onDecrementClick={onDecrementClick}
                                onIncrementClick={onIncrementClick}
                            />
                        </div>
                        <CardActions className="btns-wrap">
                            <Button
                                variant="outlined"
                                onClick={() =>
                                    data?.addProductToCart(id, count)
                                }
                            >
                                Add to cart
                            </Button>
                        </CardActions>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
