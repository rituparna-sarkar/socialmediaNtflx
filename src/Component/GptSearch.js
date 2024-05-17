import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoiveSuggestion from './GptMoiveSuggestion'
import { BACKGROUND_IMG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
       {/* gpt search bar
           gpt moive suggestion
       */}
       <div className='absolute -z-10 opacity-90'>
        <img className='w-screen h-screen' src={BACKGROUND_IMG_URL} alt='background' />
      </div>
       <GptSearchBar/>
       <GptMoiveSuggestion/>
       
    </div>
  )
}

export default GptSearch
