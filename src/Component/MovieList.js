import React from 'react'
import MoiveCard from './MoiveCard'
// import MoiveCard from './MoiveCard'


const MovieList = ({ title, moives }) => {

  console.log(moives)
  return (

    

    <div className='px-6 bg-black '>
      <h1 className='text-3xl text-white py-4 font-semi-bold'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
          
          {moives && (

            moives.map((moive) => (<MoiveCard className=' p-4 m-2' key={moive.id} posterPath={moive.poster_path} />
            ))
          )
          }


        </div>
      </div>
    </div>
  )

}

export default MovieList
