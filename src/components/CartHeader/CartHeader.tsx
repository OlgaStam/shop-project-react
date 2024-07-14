import productsArray, { Product, getProductsObject } from 'utils/productsArray'

type Props = {
    productsInCart: productsInCart
}
type productsInCart = {
    [id: number]: number
}

//ненадежно привязываться к порядковому номеру в массиве как к уникальному
// перепишем массив в объект, в котором ключом будет айди,
// с помощью функции в utils / productsArray
// теперь экспорт из utils/productsArray ф-ю и тип

type productsObjectType = {
    [id: number]: Product
}
const CartHeader = ({ productsInCart }: Props) => {
    const productsObject: productsObjectType = getProductsObject(productsArray)
    return (
        <div>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div
                        key={productId}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                            maxWidth: '400px',
                        }}
                    >
                        <div
                            style={{
                                fontSize: '12px',
                                lineHeight: '1.6',
                            }}
                        >
                            {productsObject[parseInt(productId)].title} :
                        </div>
                        <div> {productsInCart[Number(productId)]}</div>
                    </div>
                ))}
            </div>
            <div>Total : $</div>
        </div>
    )
}
export default CartHeader
