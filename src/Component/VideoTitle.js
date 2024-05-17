import React from 'react'

function VideoTitle({title,overview}) {

  return (
    <> 
    <div className='pt-40 w-screen aspect-video  px-20 absolute bg-gradient-to-r '>
      <h1 className='text-6xl font-bold  pt-30 text-white'>{title}</h1>
      <p className='py-6 text-large w-1/3 text-white'>{overview}</p>
      <div>
        <button className='bg-white text-xl text-black p-4 px-10  rounded-lg hover:bg-opacity-80'>▶️ Play</button>
        <button className='bg-gray-500 text-xl text-white p-4 px-10 mx-2 bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
    </>
  )
}

export default VideoTitle
