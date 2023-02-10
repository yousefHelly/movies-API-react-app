import React,{useEffect, useState} from 'react'
import { Row } from 'react-bootstrap'
import { MovieCard } from './MovieCard';
import { PaginationComponent } from './Pagination';
export const MoviesList = ({movies,currentSearch, totalPages, toPage, page, setPage}) => {
  const [online, setOnile] = useState(true)

  window.addEventListener(("offline"),()=>{
    setOnile(false)
  })
  useEffect(()=>{
    setOnile(window.navigator.onLine)
  },[])
  return (
    <React.Fragment>
        <Row className='mx-auto my-4'>
        {
            movies.length>0?
            movies.map((movie,i)=>{
            return(<MovieCard key={i} index={i} title={movie.title} img={movie.poster_path} date={movie.release_date} v= {movie.vote_average} vc= {movie.vote_count} id={movie.id}/>)
         }): online?<h2 className='text-center p-4'>لا توجد أفلام</h2>:<h2 className='text-center p-4'>غير متصل بالإنترنت</h2>
        }
        </Row>
        {
            movies.length>0&& <PaginationComponent total={totalPages} currentSearch={currentSearch} page={page} toPage = {toPage} setPage = {setPage}/>
        }
    </React.Fragment>
  )
}
