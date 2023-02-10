import React from 'react'
import placeholder from "../assets/No-Image-Placeholder.png"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
export const MovieCard = ({title,img=placeholder,date,v,vc,index,id}) => {
  return (
    <Link onClick={()=>window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    })}
    className='mb-3 movie-card col-md-6 col-lg-3' 
    to={`/movie/${id}`}>
        <motion.div whileHover={{scale:1.05}} whileTap={{scale:0.9}} initial={{opacity:0,scale:0.5,translateY:50,translateX:index%2==0?-50:50}} whileInView={{opacity:1,scale:1,translateY:0,translateX:0,transition:{type:"spring",damping:10,duration:0.3}}}>
            <div className='movie-img rounded text-center'>
                <img className='img-fluid rounded' src={`${!img?placeholder:"http://image.tmdb.org/t/p/w500/"+img}`}/>
                <motion.div initial={{opacity:0}} whileHover={{opacity:1}} className='movie-details d-flex flex-column align-items-center justify-content-center'>
                <p>اسم الفيلم :{title}</p>
                <p>تاريخ الاصدار :{date}</p>
                <p>عدد المقيمين :{vc}</p>
                <p>التقييم :{v}</p>
                </motion.div>
            </div>
        </motion.div>
    </Link>
  )
}
