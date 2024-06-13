import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import {auth} from '../utilis/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../utilis/userSlice';

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
  
  console.log(user);
  return (
    <div className='absolute bg-gradient-to-b from-black z-30 w-full flex flex-row justify-between '>
      <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix logo' className='w-36 object-contain cursor-pointer mt-4 ml-28'/>
      {!!user.user && (<div >
        <span className='flex flex-row mr-10 cursor-pointer' onClick={toggleDropdown}>
        <img className='rounded-lg mt-5 ml-10' src="https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt=""/>
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
