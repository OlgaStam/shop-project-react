import { Container } from '@mui/material'
import Home from 'pages/Home/Home'

type Props = {}
const Main = (props: Props) => {
    return (
        <Container
            sx={{
                padding: '40px 0',
                marginTop: '50px',
            }}
        >
            <Home />
        </Container>
    )
}
export default Main
