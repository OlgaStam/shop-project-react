import productsArray from 'utils/productsArray'

type Props = {
    productsInCart: productsInCart
}
type productsInCart = {
    [id: number]: number
}
const CartHeader = ({ productsInCart }: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div
                    key={productId}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between', // добавлено для распределения пространства между элементами
                        width: '100%', // добавлено для того, чтобы элементы занимали всю ширину родительского контейнера
                        maxWidth: '400px', // максимальная ширина контейнера, можно изменить по необходимости
                    }}
                >
                    <div>{productsArray[parseInt(productId) - 1].title} </div>
                    <div> : {productsInCart[Number(productId)]}</div>
                </div>
            ))}
        </div>
    )
}
export default CartHeader
