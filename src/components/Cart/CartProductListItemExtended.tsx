import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button, Card, CardContent, Typography, Grid } from '@mui/material'
import { useAppContext } from 'Context/AppContext' // Импорт хука для доступа к контексту
import Quantity from 'components/Quantity/Quantity'

type Props = {
    product: Product // Описание типа для продукта
    productCount: number // Количество товара в корзине
}

const CartProductListItemExtended = ({ product, productCount }: Props) => {
    // Используем хук для доступа к контексту
    const { removeProductFromCart, changeProductQuantity } = useAppContext()

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardContent
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div
                        className="product-img"
                        style={{ marginRight: '16px' }}
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            style={{ maxWidth: '200px' }}
                        />
                    </div>
                    <div>
                        <Typography variant="h6" component="div">
                            {product.title}
                        </Typography>
                        <Typography variant="body2">
                            Count: {productCount} {/* Количество товара */}
                        </Typography>
                        <Typography variant="body2">
                            Price for one item: ${product.price}{' '}
                            {/* Цена за единицу товара */}
                        </Typography>
                        <Typography variant="body2">
                            Sum: ${product.price * productCount}{' '}
                            {/* Общая стоимость */}
                        </Typography>
                        <Quantity
                            minCount={0}
                            count={productCount}
                            onDecrementClick={() => {
                                // Уменьшение количества товара в корзине
                                productCount === 1
                                    ? removeProductFromCart(product.id) // Если количество 1, удаляем товар из корзины
                                    : changeProductQuantity(
                                          product.id,
                                          productCount - 1 // Иначе уменьшаем количество на 1
                                      )
                            }}
                            onIncrementClick={() => {
                                // Увеличение количества товара в корзине
                                changeProductQuantity(
                                    product.id,
                                    productCount + 1 // Увеличиваем количество на 1
                                )
                            }}
                        />
                        <Button
                            variant="outlined"
                            onClick={() =>
                                // Удаление товара из корзины
                                removeProductFromCart(product.id)
                            }
                            style={{ width: '100%', marginTop: '10px' }} // Устанавливаем ширину кнопки на 100% от родительского контейнера
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
