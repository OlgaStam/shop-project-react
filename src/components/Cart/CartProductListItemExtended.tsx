import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button, Card, CardContent, Typography, Grid, Box } from '@mui/material'
import { useAppContext } from 'Context/AppContext' // Импорт хука для доступа к контексту
import Quantity from 'components/Quantity/Quantity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux1/hooks1' // хуки для доступа к состоянию и dispatch
import { toggleLike } from 'redux1/likeReducer' // импорт действия toggleLike

type Props = {
    id: number // Идентификатор продукта
    product: Product // Описание типа для продукта
    productCount: number // Количество товара в корзине
}

const CartProductListItemExtended = ({ id, product, productCount }: Props) => {
    // Используем хук для доступа к контексту
    const { removeProductFromCart, changeProductQuantity } = useAppContext()
    const isLiked = useAppSelector((state) => state.productsLikeState[id])

    const dispatch = useAppDispatch()
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardContent
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <div
                            className="product-img"
                            style={{ marginRight: '16px' }}
                        >
                            <Button
                                // Вызываем toggleLike с id продукта, который переключает лайк
                                onClick={() => dispatch(toggleLike(id))}
                            >
                                {isLiked ? (
                                    <FavoriteIcon />
                                ) : (
                                    <FavoriteBorderIcon />
                                )}
                            </Button>
                            <img
                                src={product.image}
                                alt={product.title}
                                // style={{ maxWidth: '200px' }}
                            />
                        </div>
                    </Box>
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
