import { useState } from "react";
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES}  from "../button/button.component";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword } from "../../utilts/firebase/firebase.utils";

import { SignUpContainer, ButtonsContainer} from './sign-in-form.styles';


const defaultFormFields = {
  email: '',
  password: '',  
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password,  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();      
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {      
      const {user} = await signInAuthUserWithEmailAndPassword(
        email, 
        password
      ); 
    
      resetFormFields();     
    } catch(error) {
      switch(error.code){
        case 'auth/user-not-found':
          alert('User not found');
          break;       
        case 'auth/wrong-password':
          alert('Email and password does not match');
          break;
        default:   
        console.log(error);    
      }
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]:value});
  };

  return (
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>      
        <FormInput 
          label="Email"
          inputOptions={{
            type:"email", 
            required: true, 
            onChange:handleChange,
            name:"email",
            value:email,
          }}
        />        
        <FormInput 
          label="Password"
          inputOptions={{
            type:"password", 
            required: true,  
            onChange:handleChange, 
            name:"password", 
            value:password,
          }}
        />
       <ButtonsContainer>
        <Button type="submit" >Sign In</Button>
        <Button 
          type='button' 
          buttonType={BUTTON_TYPE_CLASSES.google} 
          onClick={signInWithGoogle}
          >
           Sign in with Google
        </Button>
       </ButtonsContainer>      
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;