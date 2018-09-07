This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)

[영화 리스트, 활용 API](https://yts.am/api#list_movies)

## ReactJS로 영화 리스트 만들기

- ReactDOM은 1개의 Component를 render하고 그 도큐먼트 안에 엘리먼트(#root)가 존재

- Component > render > return > {JSX} (리액트로 작성하는 html, 중괄호 필수)
- 모든 Component는 render하고 return하면 끝


## component 주기

# render
componentWillMount() ->
render() ->
componentDidMount()

# update
componentWillReceiveProps() -> 
shouldComponentUpdate() -> 
componentWillUpdate() -> //로딩중
render() -> 
componentDidUpdate() //로딩종료

- fetch, promise -> 비동기적 시나리오 관리
- await ... -> ...가 끝나기를(성공여부 무관) 기다렸다가 ...의 return value
- component의 key를 index로 사용 시 느리다.

[[실전] ReactJS로 웹 서비스 만들기](https://academy.nomadcoders.co/courses/) 강좌 실습