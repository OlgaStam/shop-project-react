import { useParams } from 'react-router-dom'
import productsArray, { Product, getProductsObject } from 'utils/productsArray'

type Props = {
    productsObject?: { [id: number]: Product }
}

const ProductPage = ({
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const { id } = useParams()
    console.log('🚀 ~ id:', id)
    const productId = id || ''
    return <div>{productsObject[parseInt(productId)].title}</div>
}

export default ProductPage
