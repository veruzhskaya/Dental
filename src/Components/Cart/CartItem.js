import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/CartSlice";
import icon from '../../iclose.png'
import servicesData from "../../data/servicesData";



const CartItem =({cartItem}) => {
   console.log (cartItem)
   
   const dental = servicesData.find(item => item.services[0].id === cartItem.dentId);
  
   console.log (dental)
   const dispatch = useDispatch();
    return(
    <div className="cart_services">
        
        <div className="cart_parOne">            
            <p className="cart_service">{dental.serviceName}</p>
        </div>
        <div className="cart_par">
            <p className="cart_service">{cartItem.quantity}</p>
        </div>
        <div className="cart_par">
            <p className="cart_service">{dental.price*cartItem.quantity}</p>
        </div>
        <div>
             <span onClick={() => dispatch(removeItemFromCart({cartItemId : cartItem.id}))}>  
                <img className="icon" src={icon} alt="icon"/>
             </span> 
        </div>
    </div>
    )
}

export default CartItem;