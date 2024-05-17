
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/moiveSlice';


const useMoiveTrailer = (moiveId) => {
    const dispatch = useDispatch();
    const getMoiveVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+moiveId+"/videos?language=en-US", API_OPTIONS)
        const Json = await data.json();
        console.log(Json);
        const filterData = Json.results.filter(video => video.type ===
            "Trailer"
        )
        const Trailer = filterData.length ? filterData[0] : Json.results[0];


        dispatch(addTrailerVideo(Trailer));

    }
    useEffect(() => {
        getMoiveVideo();
    }, [])

}

export default useMoiveTrailer;



