import Movie from './Movie.js'

var MovieList = (props) => {
  return (
    <div>
        {props.movieList.map(item =>
         <Movie key = {item.key} text = {item.text} />
        )}
    </div>
  )
}


export default MovieList;