export const getMovieDetailsInside=async({params})=>{
    // console.log(params);
    const Id=params.movieID;
        try {
            const url=`http://www.omdbapi.com/?i=${Id}&apikey=${import.meta.env.VITE_API_KEY}`
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
        
    
    }