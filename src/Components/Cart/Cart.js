import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/CartSlice";
import CartItem from "./CartItem";

const Cart = () => {
   const cartItems = useSelector(getCartItems);
   const totalPrice = useSelector(getTotalPrice)
    return (
        <div className="cart_container">
            <div className="cart_content">
                <div className="cart_parOne">
                    <p className="par_header">Услуга</p>
                </div>
                <div className="cart_par">
                    <p className="par_header">Колличество</p>
                </div>
                <div className="cart_par">
                    <p className="par_header">Сумма</p>
                </div>
            </div>
                <hr/>
            <div>
                {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem = {cartItem}/>)}
            </div> 
            <div className="cart_content">
            <div className="cart_par">
                <p className="par_header">ИТОГО:</p>
            </div>
            <div className="cart_par">
                <p className="par_header">{totalPrice} рублей</p>
            </div>
            </div>
            <hr/>
            <p className="none"></p>   
        </div>
    )
}

export default Cart;