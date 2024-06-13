import React, {useState,useRef} from 'react'
import Header from './Header'
import {validateLoginForm} from '../utilis/validator'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utilis/firebase'
import { useNavigate } from 'react-router-dom';
const Login = () => {
const navigate = useNavigate()
const [isSignInDirect, setIsSignInDirect] = useState(true)
const [emailErrorMsg, setEmailErrorMsg] = useState('');
const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
const [signinsignupErrorMsg, setSigninsignupErrorMsg] = useState('');
const email = useRef(null)
const password = useRef(null)
const handleSignInSignUp = () => {
    setIsSignInDirect(!isSignInDirect)
  }
const handleSignIn = () => {
  console.log(email.current.value, password.current.value)
  let values = {email: email.current.value, password: password.current.value}
  let errors = validateLoginForm(values)
  if(errors.email || errors.password) {
    setEmailErrorMsg(errors.email)
    setPasswordErrorMsg(errors.password)
  }else{
     if(isSignInDirect){
       signInWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
           // Signed in
           const user = userCredential.user;
           console.log(user);
           navigate('/browse')
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           console.log(errorCode,errorMessage);
           setSigninsignupErrorMsg(errorMessage)
           navigate('/')
         });
     }else{
       createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
           // Signed in
           const user = userCredential.user;
           console.log(user);
           navigate('/browse')
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           console.log(errorCode,errorMessage);
           setSigninsignupErrorMsg(errorMessage)
           navigate('/login')
         });
     }

  }
}
  return (
    <div>
      <Header />
      <div className='absolute'>
      <img className='w-[1264px] h-auto object-cover' src='https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/ba2b3586ab9b4adf9542ca7757c5c553/projects/63d05d93a59d4d8fa0804d97985087ec/d7874679-bd47-4092-a610-f870036afdf9.jpeg' alt='netflix banner'/>
      </div>
      <form className='flex flex-col p-12 text-white absolute bg-black my-20 mx-auto left-0 right-0 w-4/12 bg-opacity-80'>
        <h1 className='py-4 text-3xl font-bold text-white'>{isSignInDirect ? 'Sign In' : 'Sign Up'}</h1>
        <input ref={email}  type='text' placeholder='Email or mobile number' className='p-4 my-4 bg-gray-600 border-1 border-white bprder-solid'/>
        <p className='text-red-500'>{emailErrorMsg}</p>
        {!isSignInDirect?<input type='text' placeholder='Full Name' className='p-4 bg-gray-600 border-1 border-white bprder-solid'/>:null}
        <input ref={password}  type='password' placeholder='Password' className='p-4 my-4 bg-gray-600 border-1 border-white border-solid'/>
        <p className='text-red-500'>{passwordErrorMsg}</p>
        <button className='bg-red-600 py-4 my-4 rounded-lg text-center font-solid text-white' type='button' onClick={handleSignIn}>{isSignInDirect ? 'Sign In' : 'Sign Up' }</button>
        <p className='text-red-500'>{signinsignupErrorMsg}</p>
        <p className='text-center'>OR</p>
        <h4 className='my-4'>{isSignInDirect ? 'New to Netflix?' : 'Already have an account?'} <span className='hover:underline cursor-pointer' onClick={handleSignInSignUp}>{isSignInDirect ? 'Sign up now.':'Sign in'}</span></h4>
      </form>
    </div>  

  )
}

export default Login
