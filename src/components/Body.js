import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from '../utilis/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from '../utilis/firebase';


const Body = () => {
  const dispatch = useDispatch()
  const appRoutes = createBrowserRouter([
      {
          path: "/",
          element: <Login />,
      },
      {
          path: "/browse",
          element: <Browse />,
      }
  ])

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userData = {
        uid: user.uid,
        email: user.email,
      };
      dispatch(login(userData))
    } else {
      dispatch(logout())
    }
  })
}, [])

  return (
    <div>
      <RouterProvider router={appRoutes} /> 
    </div>
  )
}

export default Body
