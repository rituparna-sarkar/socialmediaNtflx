import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

function MainCointainer() {
    const moives=useSelector((store)=>store.moives?.nowPlayingMoive);
    console.log(moives)
    if(!moives) return;
    const mainMoive=moives[0];
    console.log(mainMoive);
    console.log("hi")
   const{original_title,overview,id}=mainMoive;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground moiveId={id}/>
    </div>
  )
}

export default MainCointainer;
