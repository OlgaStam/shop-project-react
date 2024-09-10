import { useParams } from 'react-router-dom'
import productsArray, { Product, getProductsObject } from 'utils/productsArray'

type Props = {
    productsObject?: { [id: number]: Product }
}

const ProductPage = ({
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const { id } = useParams<{ id: string }>() // Указываем тип параметра как string
    const productId = id ? parseInt(id) : undefined // Преобразуем id в число
    const product = productsObject[productId as number] // Извлекаем продукт по id

    if (!product) {
        return <div>Продукт не найден</div> // Показываем сообщение, если продукт не найден
    }

    const { description, fullDescription } = product // Извлекаем описание и полное описание из продукта

    return (
        <div>
            {description && (
                <div
                    className="product-description"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            )}
            {/* Если краткое описание существует, отображаем его как заголовок */}

            {fullDescription && (
                <div
                    className="product-description"
                    dangerouslySetInnerHTML={{ __html: fullDescription }}
                />
            )}
            {/* Если полное описание существует, отображаем его */}
        </div>
    )
}

export default ProductPage
