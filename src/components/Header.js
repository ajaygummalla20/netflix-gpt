import React, {useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import {auth} from '../utilis/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../utilis/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { login } from '../utilis/userSlice';
import { LOGO } from '../utilis/constants';
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1863080765.
import {ICON} from '../utilis/constants'
const Header = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSignOut = () => {
    setIsOpen(false);
    signOut(auth).then(() => {
      dispatch(logout())
      navigate('/')
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email,
        };
        dispatch(login(userData))
        navigate('/browse')
      } else {
        dispatch(logout())
        navigate('/')
      }
    })
  }, [])
  
  console.log(user);
  return (
    <div className='absolute bg-gradient-to-b from-black z-30 w-full flex flex-row justify-between '>
      <img src={LOGO} alt='netflix logo' className='w-36 object-contain cursor-pointer mt-4 ml-28'/>
      {!!user.user && (<div >
        <span className='flex flex-row mr-10 cursor-pointer' onClick={toggleDropdown}>
        <img className='rounded-lg mt-5 ml-10' src={ICON} alt=""/>
        </span>
        {isOpen && (
        <div className="absolute mt-2 w-48 bg-black shadow-md font-bold">
          {/* Dropdown Content */}
          <ul className='text-white rounded-sm'>
            <li className='cursor-pointer' onClick={handleSignOut}>Sign Out</li>
          </ul>
        </div>
      )}
      </div>)}
    </div>
    
  )
}

export default Header
