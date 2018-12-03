import MovieList from './MovieList.js'

class App extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      items: [],
      // searchResults: []
    };

    this.addItem = this.addItem.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
    
    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });
  }

  this._inputElement.value = "";
  console.log(this.state.items);
  e.preventDefault();

  }

  searchMovies(e) {
    var results = [];
    if (this.state.items.length === 0) {
      console.log("no results");
    }
    for (var i = 0; i < this.state.items.length; i++) {
      // debugger;
      var string = String(this.state.items[i].text);
      var searchString = String(this._searchInput.value);
      var newSearchResult = {
        text: string,
        key: Date.now()
      }
      if (string.includes(searchString)) {
        // console.log("match", this.state.items[i].text);
        this.setState((prevState) => {
          return {
            items: [newSearchResult]
          };
        });
        // this.state.searchResults.push(this.state.items[i].text);
      }
    }
    console.log("Search", this.state.searchResults);
    console.log("new state after search", this.state)
    this._searchInput.value = "";
    e.preventDefault();

  }

  ifEmpty() {
    if (this.state.items.length === 0) {
      return <p>Currently no movies. Add a Movie!</p>
    }
  }
  
        // <div>
        // // <VideoList movieList={this.state.movieList} />
        // </div>

  render() {
    return (
      <div className = "movieList">
        <div className = "header"><h2>Movie List</h2></div>

        <form onSubmit = {this.addItem}>
          <input ref = {(a) => this._inputElement = a}
                  placeholder = "enter movie name"></input>
          <button type="submit">Add Movie</button>
        </form>

        <form onSubmit = {this.searchMovies}>
          <input ref = {(a) => this._searchInput = a}
                    placeholder = "Search..."></input>
          <button type = "submit">Go!</button>
        </form>
        {this.ifEmpty()}
        <MovieList movieList = {this.state.items} 
        // searchResults = {this.state.searchResults}
        />
      </div>
    );
  }

}

export default App;