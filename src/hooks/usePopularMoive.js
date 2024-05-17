import { API_OPTIONS } from '../utils/constant'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  addPopularMoive } from '../utils/moiveSlice'
const usePopularMoive=()=>{
    console.log('hi')
    const dispatch=useDispatch()
    console.log('hi2')
    

  const getPopularMoive=async()=>{
    
    const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS)
    
    const json=await data.json()
    dispatch(addPopularMoive(json.results))

  }
useEffect(()=>{
  getPopularMoive()
},[])

  
}
export default usePopularMoive;


