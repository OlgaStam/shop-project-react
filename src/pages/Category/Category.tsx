import { Link, useParams } from 'react-router-dom'
import productsArray from 'utils/productsArray'

const Category = () => {
    const { categoryId } = useParams<{ categoryId?: string }>()

    // Извлекаем уникальные категории из productsArray
    const categories = productsArray
        .filter((product) => product.category)
        .reduce<string[]>((acc, product) => {
            if (!acc.includes(product.category!)) {
                acc.push(product.category!)
            }
            return acc
        }, [])

    if (!categoryId) {
        return (
            <div>
                <h1>Categories</h1>
                <ul>
                    {categories.map((category) => (
                        <li key={category}>
                            {' '}
                            <Link to={`/category/${category}`}>{category}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    // Если categoryId существует, ищем соответствующую категорию
    const filteredProducts = productsArray.filter(
        (product) => product.category === categoryId
    )

    return (
        <div>
            <h1>Category: {categoryId}</h1>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Category
