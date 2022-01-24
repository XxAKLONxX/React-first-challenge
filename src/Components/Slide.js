import React from 'react'
import {Carousel} from 'react-bootstrap'
import madagascar from '../Components/Imgsrc/Madagascar.jpeg'
import colombia   from '../Components/Imgsrc/Colombia.jpg'
import dominican  from '../Components/Imgsrc/Dominican.jpg'  
import jamaica    from '../Components/Imgsrc/Jamaica.jpg'
import japan      from '../Components/Imgsrc/Japan.jpg'

function Slide() {
    return (
        <div>
          

<Carousel>
<Carousel.Item interval={1000}>
    <img
     src = {madagascar}
    />
    <Carousel.Caption>
      <h3>madagascar</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      
      src= {colombia}
      
    />
    <Carousel.Caption>
      <h3>colombia</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      
      src= {dominican}
    />
    <Carousel.Caption>
      <h3>dominican republic</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      
      src= {jamaica}
      
    />
    <Carousel.Caption>
      <h3>jamaica</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      
      src= {japan}
      
    />
    <Carousel.Caption>
      <h3>japan</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>  
        </div>
    )
}

export default Slide
