import React from 'react'
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div >
      <>

        <Navbar >
          <Container>
            <Navbar.Brand href="#home" className='header logo'>
              <p >  <i class="fa-solid fa-2x fa-utensils fa-flip"></i><strong
                className=' ms-2  bx bx-menu logo'>FOOD   HUB</strong></p>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>


    </div >
  )
}

export default Header