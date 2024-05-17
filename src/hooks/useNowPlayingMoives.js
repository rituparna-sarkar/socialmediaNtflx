import { API_OPTIONS } from '../utils/constant'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addPalyingMoive } from '../utils/moiveSlice'
const useNowPlayingMoives=()=>{
    console.log('hi')
    const dispatch=useDispatch()
    console.log('hi2')
    

  const getNowPlayingMoive=async()=>{
    
    const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS)
    
    const json=await data.json()
    dispatch(addPalyingMoive(json.results))

  }
useEffect(()=>{
  getNowPlayingMoive()
},[])

  
}
export default useNowPlayingMoives;


