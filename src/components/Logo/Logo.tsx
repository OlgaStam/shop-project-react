import { Typography } from '@mui/material'
import logo from '../../assets/logo.svg'
type Props = unknown
const Logo = (props: Props) => {
    return (
        <Typography
            variant="h6"
            component="div"
            sx={{
                flexGrow: 1,
                paddingTop: 1.2,
            }}
        >
            <img src={logo} alt="Fake-shop logo" />
        </Typography>
    )
}
export default Logo
