import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'


const MoiveCard = ({posterPath}) => {
  return (
    <div className='w-40 pr-4 '>
      <img className='rounded-md ' alt='moiveCard' src={IMG_CDN_URL+ posterPath}/>
    </div>
  )
}

export default MoiveCard
