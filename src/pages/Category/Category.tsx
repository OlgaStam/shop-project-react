import { Grid, Typography } from '@mui/material'
import ProductListItem from 'components/Products/ProductListItem'
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
            <Typography
                component="h1"
                variant="h4"
                align="center"
                sx={{ marginBottom: '30px' }}
            >
                Category: {categoryId}
            </Typography>
            <Grid
                container
                spacing={4}
                alignItems="stretch"
                sx={{ '& > *': { width: '100%' } }} // Этот стиль применяет одинаковую ширину
            >
                {filteredProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductListItem
                            id={product.id}
                            image={product.image}
                            title={product.title}
                            type={product.type}
                            capacity={product.capacity}
                            price={product.price}
                            category={product.category}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Category
