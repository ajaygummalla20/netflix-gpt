import React, {useState,useRef} from 'react'
import Header from './Header'
import {validateLoginForm} from '../utilis/validator'

const Login = () => {
const [isSignInDirect, setIsSignInDirect] = useState(true)
const [isSignUp, setIsSignUp] = useState(false)
const [emailErrorMsg, setEmailErrorMsg] = useState('');
const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
const email = useRef(null)
const password = useRef(null)
const handleSignInType =  () => {
    setIsSignInDirect(!isSignInDirect)
  }
const handleSignInSignUp = () => {
    setIsSignUp(!isSignUp)
  }
const handleSignIn = () => {
  console.log(email.current.value, password.current.value)
  let values = {email: email.current.value, password: password.current.value}
  let errors = validateLoginForm(values)
  if(errors.email || errors.password) {
    setEmailErrorMsg(errors.email)
    setPasswordErrorMsg(errors.password)
  }
}
  return (
    <div>
      <Header />
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='netflix banner'/>
      </div>
      <form className='flex flex-col p-12 text-white absolute bg-black my-36 mx-auto left-0 right-0 w-4/12 bg-opacity-80'>
        <h1 className='py-4 text-3xl font-bold text-white'>{isSignInDirect ? 'Sign In' : 'Sign Up'}</h1>
        <input ref={email}  type='text' placeholder='Email or mobile number' className='p-4 my-4 bg-gray-600 border-1 border-white bprder-solid'/>
        <p className='text-red-500'>{emailErrorMsg}</p>
        {isSignUp?<input type='text' placeholder='Full Name' className='p-4 bg-gray-600 border-1 border-white bprder-solid'/>:null}
        {isSignInDirect || isSignUp?<input ref={password}  type='password' placeholder='Password' className='p-4 my-4 bg-gray-600 border-1 border-white border-solid'/>:null}
        <p className='text-red-500'>{passwordErrorMsg}</p>
        <button className='bg-red-600 py-4 my-4 rounded-lg text-center font-solid text-white' type='button' onClick={handleSignIn}>{isSignInDirect ? 'Sign In' : isSignUp ? 'Sign Up' : 'Send sign-in code'}</button>
        <p className='text-center'>OR</p>
        <button onClick={handleSignInType} type='button'>{isSignInDirect ? 'Use a sign in code' : 'Use password'}</button>
        <h4 className='my-4'>New to Netflix? <span className='hover:underline cursor-pointer' onClick={handleSignInSignUp}>Sign up now.</span></h4>
      </form>
    </div>  

  )
}

export default Login
