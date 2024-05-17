
import { useSelector } from 'react-redux';
import useNowPlayingMoives from '../hooks/useNowPlayingMoives'
import usePopularMoive from '../hooks/usePopularMoive';
import useUpcomingMoive from '../hooks/useUpcomingMoive';
import GptSearch from './GptSearch';
import Header from './Header'
import MainCointainer from './MainCointainer';
import SecondaryContainer from './SecondaryContainer';



function Browse() {

  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)

  useNowPlayingMoives();
  usePopularMoive();
  useUpcomingMoive();
  
  return (
    <div>
      <Header/>
      {
        showGptSearch?<GptSearch/>:<>  <MainCointainer/>
        <SecondaryContainer/></>
      }
      
     
    </div>
  )
}

export default Browse
