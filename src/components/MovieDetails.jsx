import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import {motion} from 'framer-motion'
import placeholder from "../assets/No-Image-Placeholder.png"
export const MovieDetails = () => {
  const {id} = useParams();
  const [movieData,setMovieData] = useState(0);
  const getMovieData = async(id)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6121eb111e8c529279ac39e36bf3aee0&language=ar`)
    const data = await res.data
    setMovieData(data)
  }
  useEffect(()=>{
    getMovieData(id)
  },[])
  return (
    <React.Fragment>
      <div>
        <div className='movie-details my-4'>
          <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:0.5}}} className='row mx-auto bg-white rounded shadow my-3'>
            <Col className='d-flex  align-items-center justify-content-center px-0' lg={4} md={6}>
              <img className='img-fluid rounded'  src={`${!movieData.poster_path?placeholder:"http://image.tmdb.org/t/p/w500/"+movieData.poster_path}`}/>
            </Col>
            <Col lg={8} md={6}>
              <div className='d-flex flex-column align-items-start justify-content-center gap-4 p-4'>
                <p className='fs-4 fw-bold text-black-50 mb-0'>اسم الفيلم : {movieData.title}</p>
                {
                  document.title=`Movies App${movieData.title?` | ${movieData.title}`:""}`
                }
                {
                  movieData.original_title != movieData.title && <p className='fs-4 fw-bold text-black-50 mb-0'>الاسم بلغة الفيلم  : {movieData.original_title}</p>
                }
                <p className='fs-4 fw-bold text-black-50 mb-0'>تاريخ الإصدار : {movieData.release_date}</p>
                <p className='fs-4 fw-bold text-black-50 mb-0'>التقييم : {movieData.vote_average}</p>
                <p className='fs-4 fw-bold text-black-50 mb-0'>التصنيف : {movieData.genres?movieData.genres[0]?movieData.genres[0].name:"غير معروف":"غير معروف"}</p>
                <p className='fs-4 fw-bold text-black-50 mb-0'>الشعبية : {movieData.popularity}</p>
                <p className='fs-4 fw-bold text-black-50 mb-0'>بلد الإنتاج : {movieData.production_countries?movieData.production_countries[0]?movieData.production_countries[0].name:"غير معروف":"غير معروف"}</p>
              </div>
            </Col>
          </motion.div>
          <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:0.5}}} className='row mx-auto bg-white rounded shadow my-3'>
          <Col sm={12}>
            <div className='d-flex flex-column align-items-start justify-content-center gap-4 p-4'>
              <p className='fs-3 fw-bold text-black-50 mb-0'>قصة الفيلم :</p>
              <p className='fs-5 fw-bold text-black-50 mb-0'>{movieData.overview?movieData.overview:"غير متوفرة معلومات كافية عن قصة الفيلم"}</p>
            </div>
          </Col>
          <Col className="d-flex flex-column flex-md-row justify-content-center gap-4 pt-3 pb-5">
            <Link onClick={()=>window.scrollTo({
                top:0,
                left:0,
                behavior:'smooth'
              })} 
              to="/">
              {console.log(movieData)}
                <Link to="/">
                  <Button className='w-100' onClick={()=>setMovieData([])} variant='outline-warning'>عودة الي القائمة الرئيسية</Button>
                </Link>
            </Link>
              <a target="_blank" href={`https://www.themoviedb.org/movie/${id}/watch`}>
              <Button className='w-100' variant='outline-warning'>مشاهدة الفيلم</Button>
              </a>
          </Col>
        </motion.div>
        </div>
      </div>
    </React.Fragment>
  )
}
