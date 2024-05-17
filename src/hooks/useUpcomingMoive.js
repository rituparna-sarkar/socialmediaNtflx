import { API_OPTIONS } from '../utils/constant'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUpcomingMoive} from '../utils/moiveSlice'
const useUpcomingMoive=()=>{
    console.log('hi')
    const dispatch=useDispatch()
    console.log('hi2')
    

  const getUpcomingMoive=async()=>{
    
    const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS)
    
    const json=await data.json()
    dispatch(addUpcomingMoive(json.results))

  }
useEffect(()=>{
  getUpcomingMoive()
},[])

  
}
export default useUpcomingMoive;


