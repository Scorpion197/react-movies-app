import {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    API_URL,
    API_KEY,
    REQUEST_TOKEN_URL,
    LOGIN_URL,
    SESSION_ID_URL,
  } from './config';
  
  const defaultConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };


const API = {


    fetchMovies: async (page) => {

        const endpoint = `${POPULAR_BASE_URL}&page=${page}`;
        return await (await fetch(endpoint)).json();
    },

    fetchOneMovie : async(movieId) => {

        const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
        return await (await fetch(endpoint)).json();

    }, 

    fetchCredits: async(movieId) => {

      const endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      return await (await fetch(endpoint)).json();
      
    }

}

export default API;