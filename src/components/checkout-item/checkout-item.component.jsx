import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { 
  CheckoutItemContainer, 
  ImageContainer, 
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton 
} from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
  const { name, price, imageUrl, quantity} = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart  } = 
  useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const reduceItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);

  return(
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${imageUrl}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={reduceItemHandler}>
          &#10094;
        </Arrow>
        <Value> {quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>       
      </Quantity>    
      <BaseSpan>${price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem;