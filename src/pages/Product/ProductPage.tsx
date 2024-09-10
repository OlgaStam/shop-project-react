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
    return (
        <div>
            <div>{productsObject[parseInt(id!)].title}</div>
        </div>
    )
}

export default ProductPage
