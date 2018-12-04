var Movie = (props) => {
  return (
    <div className = "movie" key = {props.key}>{props.text}</div>
  )
}

export default Movie;