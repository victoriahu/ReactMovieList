var MovieList = (props) => {

  return (
    // <div>
    // <div>
    //     {props.searchResults.length && props.searchResults.map(item =>
    //      <div className = "movie" key = {item.key}>{item.text}</div>
    //     )}
    // </div>
    <div>
        {props.movieList.map(item =>
         <div className = "movie" key = {item.key}>{item.text}</div>
        )}
    </div>
    // </div>
  )
  
}


export default MovieList;