import React, { useRef, useState } from 'react'
import Header from './Header'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { CheckValidData } from '../utils/validated'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_IMG_URL, USERLOGO } from '../utils/constant';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [isChecked, setIsChecked] = useState(false)
  const [isSignInForm, setIsSignForm] = useState(true)
  const [errMsg, setErrMsg] = useState(null)

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)


  const checkeds = () => {
    setIsChecked(!isChecked)

  }
  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm)
  }
  const handleButtonClick = () => {
    // validate form data

    if (isSignInForm) {
      console.log("SignIN")
      let msg = CheckValidData(email.current.value, password.current.value, null)

      setErrMsg(msg)
    }
    else {
      console.log("SignUP")
      let msg = CheckValidData(email.current.value, password.current.value, name.current.value)

      setErrMsg(msg)
    }

    let msg = CheckValidData(email.current.value, password.current.value)
    if (msg) return;

    // sign In || sign Up

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USERLOGO,
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;

            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              }))


            // Profile updated!
            // ...
          }).catch((error) => {
            setErrMsg(errMsg.message)
            // An error occurred
            // ...
          });
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errorMessage)
          // ..
        });


    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
         


          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errorMessage)
        });
    }


  }
  return (
    <div>

      <Header />
      <div className='absolute'>
        <img className='w-screen h-screen' src={BACKGROUND_IMG_URL} alt='background' />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 p-12 bg-black bg-opacity-70 my-36 mx-auto right-0  left-0 text-white ' >
        <h1 className='font-bold text-3xl py-4 ' >{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type='text' placeholder='Enter Your Name ' className='p-3 m-2 w-full text-sm rounded-md bg-gray-700 cursor-pointer' />}
        <input ref={email} type='email' placeholder='Email Address Enter ' className='p-3 m-2 w-full text-sm rounded-md bg-gray-700 cursor-pointer' />
        <input ref={password} type='password' placeholder='password Enter' className='p-3 m-2 w-full text-sm rounded-md bg-gray-700 cursor-pointer' />
        <p className='text-red-500 text-sm m-2 p-2'>{errMsg}</p>
        <button onClick={handleButtonClick} className='p-2 m-2 mt-4 bg-red-700 w-full rounded-md cursor-pointer'>{isSignInForm ? "Sign In" : "Sign Up"}</button>

        <input checked={isChecked} onClick={checkeds} type='checkbox' className='mt-4' readOnly />
        <label htmlFor='checkbox' className='text-white text-sm  my-2 cursor-pointer'>I agree to the terms and conditions.</label>
        <p
          onClick={toggleSignInForm}
          className='py-4 m-2 text-sm cursor-pointer'>{!isSignInForm ? "Already Sign Up. Sign In now" : "New to netflix ? Sign Up now"} </p>
      </form>
    </div>
  )
}

export default Login
