var MovieList = (props) => {
  return (
    <div>
        {props.movieList.map(item =>
         <div className = "movie" key = {item.key}>{item.text}</div>
        )}
    </div>
  )
}


export default MovieList;