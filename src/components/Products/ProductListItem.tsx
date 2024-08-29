import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'
import { useState } from 'react'
import Quantity from 'components/Quantity/Quantity'
import { useAppContext } from 'Context/AppContext' // Импорт контекста для доступа к функциям корзины

type Props = {
    id: number // Идентификатор продукта
    image: any // Изображение продукта
    title: string // Название продукта
    type: string // Тип продукта
    capacity: string // Ёмкость продукта
    price: number // Цена продукта
}

const ProductListItem = ({
    id,
    image,
    title,
    type,
    capacity,
    price,
}: Props) => {
    const { addProductToCart } = useAppContext() // Извлечение функции из контекста
    const [count, setCount] = useState<number>(1) // Состояние для количества продукта

    // Функция для увеличения количества продукта
    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }

    // Функция для уменьшения количества продукта
    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }

    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="product-img">
                    <img src={image} alt={title} /> {/* Изображение продукта */}
                </div>
                <h4 className="product-title">{title}</h4>{' '}
                {/* Название продукта */}
                <div className="product-discription">This is {title}</div>{' '}
                {/* Описание продукта */}
                <div className="product-features">Type: {type}</div>{' '}
                {/* Тип продукта */}
                <div className="product-features">
                    Capacity: {capacity}Gb
                </div>{' '}
                {/* Ёмкость продукта */}
                <div className="product-price">Price: $ {price}</div>{' '}
                {/* Цена продукта */}
            </CardContent>
            <Quantity
                minCount={1}
                count={count}
                onDecrementClick={onDecrementClick} // Обработчик для уменьшения количества
                onIncrementClick={onIncrementClick} // Обработчик для увеличения количества
            />
            <CardActions className="btns-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(id, count)} // Добавление продукта в корзину
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
