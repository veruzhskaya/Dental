import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from '../../redux/CartSlice'
import { useDispatch } from "react-redux";

const Dental = ({dent}) =>{
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (
        <div>
           
            <p>{dent.serviceName}</p>
            <p>{dent.price} руб.</p>
            <ChangeQuantity quantity ={quantity} setQuantity = {setQuantity}/>
            <button className="cart_btn" onClick={() => {dispatch(addItemToCart({dent, quantity}))}}>в корзину</button>
        </div>
    )
}

export default Dental;