import { Typography } from '@mui/material'
import GridContainer from 'components/GridContainer/GridContainer'
import ProductList from 'components/Products/ProductList'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <GridContainer>
                <Typography
                    component="h2"
                    variant="h3"
                    align="center"
                    sx={{
                        gridColumn: '1 / -1', // Заставляет заголовок занимать всю ширину сетки
                    }}
                >
                    List of Products
                </Typography>
                <ProductList />
            </GridContainer>
        </>
    )
}

export default Home
