import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
  const { name, price, imageUrl, quantity} = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart  } = 
  useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const reduceItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);

  return(
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${imageUrl}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={reduceItemHandler}>
          &#10094;
        </div>
        <span className='value'> {quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>       
      </span>    
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem;