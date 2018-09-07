import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
	// render: componentWillMount() -> render() -> componentDidMount()
	// update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

	state = {}

	componentWillMount(){
		console.log('컴포넌트 주기 1. will mount');
	}

	componentDidMount(){
		console.log('컴포넌트 주기 3. did mount');
		this._getMovies();
	}

	// 리액트 자체 fn과의 차이를 두기 위해 _언더스코어 추가
	_renderMovies = () => {
		const movies = this.state.movies.map((movie) => {
    	return <Movie
    		key={movie.id}
    		title={movie.title}
    		poster={movie.medium_cover_image}
    		genres={movie.genres}
    		synopsis={movie.synopsis}
    	/>
    })
    return movies
	}

	_getMovies = async () => {
		const movies = await this._callApi()
		this.setState({
			movies
		})
	}

	_callApi = () => {
		return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
		.then(response => response.json())
		.then(json => json.data.movies)
		.catch(err => console.log(err))
	}

  render() {
  	console.log('컴포넌트 주기 2. did render')
  	const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
