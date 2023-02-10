import React, { useState,useEffect } from 'react'
import ReactPaginate from 'react-paginate';
export const PaginationComponent = ({total,currentSearch,toPage,page,setPage}) => {
    const handlePageClick = (pageNum)=>{
        toPage(currentSearch,pageNum.selected + 1);
        setPage(pageNum.selected)
    }
    const [range,setRange] = useState(0)
    useEffect(()=>{setRange(window.innerWidth>=500?2:window.innerWidth>=375?1:0)},[])
    const pageCount = total;
    window.addEventListener('resize',()=>{
        setRange(window.innerWidth>=500?2:window.innerWidth>=375?1:0)
    })
  return (
    <React.Fragment>
        <ReactPaginate
            breakLabel=".."
            nextLabel="التالي"
            onPageChange={handlePageClick}
            pageRangeDisplayed={range}
            marginPagesDisplayed={range}
            pageCount={pageCount}
            previousLabel="السابق"
            containerClassName='pagination justify-content-center mt-4 mb-5'
            pageClassName='page-item'
            pageLinkClassName='page-link text-warning'
            previousClassName='page-item'
            previousLinkClassName='page-link text-warning'
            nextClassName='page-item'
            nextLinkClassName='page-link text-warning'
            breakClassName='page-item'
            breakLinkClassName='page-link text-warning'
            activeClassName='active'
            activeLinkClassName='bg-warning text-white'
            forcePage={page}
            onClick={()=>window.scrollTo({
                top:0,
                left:0,
                behavior:'smooth'
            })}
        />
    </React.Fragment>
  )
}
