import { Typography } from '@mui/material'
import GridContainer from 'components/GridContainer/GridContainer'
import ProductList from 'components/Products/ProductList'
import Reviews from 'components/Reviews/Reviews'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <Typography component="h2" variant="h3" align="center">
                List of Products
            </Typography>
            <GridContainer>
                <ProductList />
            </GridContainer>
            <Reviews name={''} text={''} />
        </>
    )
}

export default Home
