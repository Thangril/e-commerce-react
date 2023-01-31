import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg'; 
import { selectCurrentUser } from '../../store/user/user.selector';

import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utilts/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';

import {
  NavigationContainer, 
  LogoContainer, 
  NavLinks, 
  NavLink
} from './navigation.styles';


const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);
  
  return (
    <Fragment>
      <NavigationContainer>       
        <LogoContainer to='/'>
          <Logo className='logo'/>
        </LogoContainer>       
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
          <CartIcon/>          
        </NavLinks>
        {isCartOpen && <CartDropDown />}        
      </NavigationContainer>
      <Outlet />
    </Fragment>    
  );
};

export default Navigation;