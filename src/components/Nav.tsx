import { Link } from "react-router-dom"
import ShoppingCart from "../icons/ShoppingCart"


export default function Nav() {
    return (
        <nav>
            <div>Logo</div>
            <Link to="/">Home</Link>
            <Link to="/products">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/cart"><ShoppingCart /></Link>
        </nav>
    )
}
