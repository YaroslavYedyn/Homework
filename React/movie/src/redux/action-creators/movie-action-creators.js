import {moviesService, searchService} from '../../services'
import {SET_MOVIES,SET_MOVIES_SEARCH} from "../action-types";
export const setMovies=(params)=>async(dispatch)=>{
    console.log(params);
    let promise = await moviesService.getMovies(params).then();
    dispatch({type:SET_MOVIES,payload:promise})
}
export const setMoviesSearch=(query)=>async (dispatch)=>{
     let data=await searchService.getMoviesBySearch(query).then()
    dispatch({type:SET_MOVIES_SEARCH,payload:data})
}