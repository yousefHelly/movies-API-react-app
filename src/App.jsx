import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { MoviesList } from './components/MoviesList'
import { NavBar } from './components/NavBar'
import axios  from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieDetails } from './components/MovieDetails';
function App() {
  const [data, setData] = useState([]);
  const [totalPages,setTotalPages] = useState(0);
  const [currentSearch,setCurrentSearch] = useState('');
  const [page,setPage] = useState(null);
  const getData = async(page=1)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6121eb111e8c529279ac39e36bf3aee0&language=ar&page=${page}`)
    const movies = await res.data.results
      if(res.data.total_pages>=500){
          setTotalPages(500)
      }else{
          setTotalPages(res.data.total_pages)
      }
    setData(movies)
  }
  useEffect(()=>{
    getData() 
  },[])

  const search=async(val,page=1)=>{
      setCurrentSearch(val)
    if(val===""){
      getData(page)
    }else{
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6121eb111e8c529279ac39e36bf3aee0&query=${val}&language=ar&page=${page}`)
      const movies = await res.data.results
      setData(movies)
      if(res.data.total_pages>=500){
          setTotalPages(500)
      }else{
          setTotalPages(res.data.total_pages)
      }
    }
  }
  const forcepage = (val)=>{
      setPage(val)
  }
  return (
    <div className="App">
    <NavBar search = {search} forcepage = {forcepage}/>
    <Container className='overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MoviesList movies={data} totalPages = {totalPages} currentSearch = {currentSearch} toPage={search} page={page} setPage = {setPage}/>}/>
          <Route path='/movie/:id' element={<MovieDetails/>}/>
        </Routes>
      </BrowserRouter>
    </Container>
    </div>
  )
}

export default App
