import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
    const moives=useSelector((store)=>store.moives)
    console.log(moives)
  return (
    moives.nowPlayingMoive &&( 
    <div className='-mt-48 z-20 '>
        {/* 
        moivelist-popular
        moiveCard* n
        moivelist-now playing moive
        moivelist-trending
        moivelist-horror
         */}

         <MovieList className="absolute" title={"Now Playing Moive"} moives={moives.nowPlayingMoive}/>
         <MovieList title={"Upcoming"} moives={moives.upcomingMoive}/>
         <MovieList title={"Popular Moive"} moives={moives.popularMoive}/>
         <MovieList title={"Horror Moive"} moives={moives.nowPlayingMoive}/>
      
    </div>
    )
  )
}

export default SecondaryContainer
