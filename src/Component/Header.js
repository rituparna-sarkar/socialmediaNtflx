import React from 'react'
import { auth } from '../utils/firebase';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';
import { ToggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LAGUAGE } from '../utils/constant';
import { changeLanguage } from '../utils/langSelect';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      navigate('/error')
      // An error happened.
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
        // ...
      }
    });
    // unsubscribe when component unmount
    return () => unsubscribe();
  }, [

  ])

   const handleGptSearch=()=>{
    dispatch(ToggleGptSearchView())
    
   }

   const handleLanguageChange=(e)=>{
   
    dispatch(changeLanguage(e.target.value))
   }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={LOGO} alt='logo' />

      {user && (<div className='flex'>
        
        <select className='p-2 m-4 rounded-lg bg-slate-500 text-white' onChange={handleLanguageChange}>
          <optgroup label='Languages'>
            {
              SUPPORTED_LAGUAGE.map((lang)=>( <option key={lang.indentifier} value={lang.indentifier}>{lang.name}</option>))
            }
            
          </optgroup>
      </select>
        <button className='py-2 px-4 my-4 mx-2 rounded-lg bg-blue-400'
        onClick={handleGptSearch}>GPT Search</button>
        <img className='w-14 h-14 p-4' alt='userIcon' src={user.photoURL} />
        <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
      </div>)}




    </div>
  )
}

export default Header
