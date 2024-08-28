import MenuItem from './MenuItem'

type Props = unknown
function Menu(props: Props) {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about-us">About us</MenuItem>
            <MenuItem to="/payment">Payment</MenuItem>
            <MenuItem to="/shipping">Shipping</MenuItem>
            <MenuItem to="/category">Category</MenuItem>
            <MenuItem to="/cart">Cart</MenuItem>
        </>
    )
}
export default Menu
