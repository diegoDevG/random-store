import { CartItemType } from "../../types/producType"
import { CartItem } from "../CartItem/cartItem"

import styles from './cart.module.css'

type Props = {
    cartItems: CartItemType[],
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

export const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    const calculateTotal = (items: CartItemType[]) => {
        return items.reduce((acc: number, item) => acc + item.amount * item.price, 0)
    }
    return (
        <div className={styles.cart}>
            <h4>Your cart items</h4>
            {cartItems.length === 0 ? <p>Cart is empty</p> : cartItems.map(item => (
                <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
            ))}
            
            {cartItems.length !== 0 &&  <h2>Total: $ { calculateTotal(cartItems).toFixed(2) }</h2>}
           
        </div>
    )
}