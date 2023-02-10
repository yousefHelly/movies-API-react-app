import React, { useRef } from 'react'
import {Button, Container, FormControl, Navbar} from "react-bootstrap"
import brand from "../assets/video-player.png" 
export const NavBar = ({search,forcepage}) => {
    const searchInput = useRef(0);
    const searchForMovies = ()=>{
        search(searchInput.current.value)
        forcepage(0)
    }
  return (
    <React.Fragment>
        <Navbar expand="lg" className='bg-black'>
        <Container fluid>
            <Navbar.Brand className='d-flex align-items-center gap-3'>
                <img style={{height:"42px"}} className='img-fluid' src={brand}/>
                <h3 className='text-warning m-0'>أفلامك</h3>
            </Navbar.Brand>
            <Navbar.Toggle className='bg-warning' aria-controls="navbar"></Navbar.Toggle>
                <Navbar.Collapse className='justify-content-end me-5' id='navbar'>
                    <nav className='d-flex flex-column flex-lg-row my-4 mu-lg-0 gap-3 gap-md-4 w-100'>
                        <FormControl onChange={searchForMovies} ref={searchInput} type='text' placeholder='إبحث'/>
                        <Button onClick={searchForMovies} className='px-4' variant='outline-warning'>بحث</Button>
                    </nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </React.Fragment>
  )
}
