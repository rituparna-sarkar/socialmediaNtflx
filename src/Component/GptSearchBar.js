import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey=useSelector((store)=>store. language.lang)
  return (
    <div className='pt-[10%] flex justify-center text-center '>
        <form className='bg-black  rounded-lg w-[60%] h-auto grid grid-cols-12'>
        <input type=' text' className=' m-8  px-4 py-2 w-[90%] rounded-lg col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/> 
        <button className=' px-4 mr-6 bg-red-500 mt-8 mb-8   text-white rounded-lg col-span-3 '>{lang[langKey].search}</button>
        </form>
      
    </div>
  )
}

export default GptSearchBar
